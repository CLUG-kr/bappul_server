import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantController } from './restaurant.controller'
import { RestaurantService } from './restaurant.service'
import { restaurant } from '../entities/restaurant.entity'
import { restaurant_comment } from '../entities/restaurant_comment.entity'
import { UserService } from '../users/users.service'
import { User } from '../entities/user.entity'

@Module({
    imports: [TypeOrmModule.forFeature([restaurant, restaurant_comment, User])],
    controllers: [RestaurantController],
    providers: [RestaurantService, UserService],
    exports: [RestaurantService]
})
export class RestaurantModule {}
