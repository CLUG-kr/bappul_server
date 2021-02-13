import { Body, Controller, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { RestaurantService } from '../restaurant/restaurant.service'
import { UserService } from '../users/users.service'
import { restaurant } from '../entities/restaurant.entity'
import { restaurant_comment } from '../entities/restaurant_comment.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../entities/user.entity';
import { ReviewForm } from '../object/reviewForm';
import { userInfo } from 'os';

@Controller('restaurant')
export class RestaurantController {
    constructor(
        private readonly appService: RestaurantService,
        private readonly userService: UserService,

        @InjectRepository(restaurant)
        private resRepository: Repository<restaurant>,

        @InjectRepository(User)
        private userRepository: Repository<User>
        ) {}
          
    @Post('/:name/reviews/review')
    async findMostRecentReview(@Param('name') restaurantName, @Body() location) {
        const restaurant = await this.resRepository.findOne({
            'lat': location.lat,
            'long': location.long,
            'name': restaurantName
        })

        if(restaurant) {
            const review = await this.appService.findMostRecentReview(restaurant.restaurantId);
            const userCode = review.userCode;
            const userInfo:User = await this.userRepository.findOne({userClassification: userCode});

            const reviewForm = new ReviewForm();
            reviewForm.name = userInfo.name;
            reviewForm.date = review.createdDate;
            reviewForm.rate = review.rating;
            reviewForm.content = review.commentContent;

            return reviewForm;
        }
        return null        
    }

    @Post('/:name/reviews/:requestNum')
     async findReviews(@Param('name') restaurantName, @Param('requestNum') requestNum, @Body() location) {
        const restaurant = await this.resRepository.findOne({
            'lat': location.lat,
            'long': location.long,
            'name': restaurantName
        })

        if(restaurant) {
            const review = await this.appService.find20Reviews(restaurant.restaurantId, requestNum);

            return {
                "reviews": await this.appService.returnRecent20Reviews(review[0]),
                "length": review[0].length
            }
        }
        return null        
    }

    /* body 형식
    차돌이식당
        {
            "location": {
                "lat": "37.5061724",
                "long": "126.9569251"
            },
            "review": {
                "commentContent": "그냥그럼ㅇㅇ",
                "rating": "3"
            }    
        }
    */
    @UseGuards(JwtAuthGuard)
    @Post('/:name/review')
    async postNewReview(@Param('name') restaurantName, @Request() req, @Body() content) {
        let restaurant:restaurant = await this.resRepository.findOne({
            'lat': content.location.lat,
            'long': content.location.long,
            'name': restaurantName
        })

        if(!restaurant) {
            this.appService.makeNewRestaurant(content.location, restaurantName)
            restaurant = await this.resRepository.findOne({
                'lat': content.location.lat,
                'long': content.location.long,
                'name': restaurantName
            })
        }
        this.appService.postNewReview(req, content.review, restaurant.restaurantId);
    }
}
