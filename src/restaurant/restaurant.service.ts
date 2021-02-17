import { Injectable } from '@nestjs/common';
import { restaurant } from '../entities/restaurant.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { restaurant_comment } from '../entities/restaurant_comment.entity'
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity'
import { UserService } from '../users/users.service'
import { ReviewForm } from '../object/reviewForm';

@Injectable()
export class RestaurantService {
    constructor(
        private readonly userService: UserService,

        @InjectRepository(restaurant_comment)
        private commentRepository: Repository<restaurant_comment>,

        @InjectRepository(restaurant)
        private resRepository: Repository<restaurant>
        ) {}

    async findMostRecentReview(restaurantId) {
        return await this.commentRepository.findOne({
            where: {restaurantId: restaurantId},
            order: {
                createdDate: 'DESC'
            }            
        });
    }

    async find20Reviews(restaurantId, requestCount) {
        return await this.commentRepository.findAndCount({
            order: {
                createdDate: 'DESC'
                },
            skip: (requestCount-1)*20,
            take: 20,
            where: {
                restaurantId: restaurantId
            }
        })
    }

    async postNewReview(req, post:restaurant_comment, restaurantId:string) {
        const comment = {
            userCode : req.user.userId,
            restaurantId : restaurantId,
            commentContent : post.commentContent,
            rating : post.rating
        }

        await this.commentRepository.insert(comment);
    }

    async makeNewRestaurant(location, name) {
        const restaurant = {
            'lat' : location.lat,
            'long' : location.long,
            'name' : name,
        };
        await this.resRepository.insert(restaurant);
    }

    async returnRecent20Reviews(reviews:Array<restaurant_comment>) {
        const reviewsToShow = []
        
        for(const element of reviews) {
            const userCode = element.userCode;
            const userInfo:User = await this.userService.findUserByCode(userCode)        

            const reviewForm = new ReviewForm();
            reviewForm.name = userInfo.name;
            reviewForm.date = element.createdDate;
            reviewForm.rate = element.rating;
            reviewForm.content = element.commentContent;

            reviewsToShow.push(reviewForm);
            console.log(reviewsToShow)
        }      
        
        return reviewsToShow
    }
}
