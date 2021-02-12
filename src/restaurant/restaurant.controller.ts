import { Body, Controller, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { RestaurantService } from '../restaurant/restaurant.service'
import { restaurant } from '../entities/restaurant.entity'
import { restaurant_comment } from '../entities/restaurant_comment.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('restaurant')
export class RestaurantController {
    constructor(
        private readonly appService: RestaurantService,
        @InjectRepository(restaurant)
        private resRepository: Repository<restaurant>
        ) {}
    
      
    @Get('/:name/reviews/review')
    async findMostRecentReview(@Param('name') restaurantName, @Body() location) {
        const restaurant = await this.resRepository.findOne({
            'lat': location.lat,
            'long': location.long,
            'name': restaurantName
        })

        if(restaurant) {
            return this.appService.findMostRecentReview(restaurant.restaurantId);
        }
        return null
        
    }

    /* body 형식
        {
            "location": {
                "lat": "10",
                "long": "20"
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
