import { Injectable } from '@nestjs/common';
import { restaurant } from '../entities/restaurant.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { restaurant_comment } from '../entities/restaurant_comment.entity'
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(restaurant_comment)
        private commentRepository: Repository<restaurant_comment>,

        @InjectRepository(restaurant)
        private resRepository: Repository<restaurant>
        ) {}

    async findMostRecentReview(restaurantId) {
        return await this.commentRepository.findOne({restaurantId: restaurantId})
    }

    async postNewReview(req, post:restaurant_comment, restaurantId:string) {
        const comment = {
            userCode : req.user.userId,
            restaurantId : restaurantId,
            commentContent : post.commentContent,
            rating : post.rating
        }

        this.commentRepository.insert(comment);
    }

    async makeNewRestaurant(location, name) {
        const restaurant = {
            'lat' : location.lat,
            'long' : location.long,
            'name' : name,
        };
        this.resRepository.insert(restaurant);
    }
}
