import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from '../restaurant/restaurant.service'

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly appService: RestaurantService) {}

    @Get('/review')
    async findMostRecentReview() {
        
    }
}
