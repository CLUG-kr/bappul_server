import { Injectable } from '@nestjs/common';
import { restaurant } from '../entities/restaurant.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { restaurant_comment } from '../entities/restaurant_comment.entity'
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(restaurant_comment)
        private commentRepository: Repository<restaurant_comment>
        ) {}

    async findMostRecentReview(restaurantId) {
        return await this.commentRepository.findOne({restaurantId: restaurantId})
    }

    async postNewReview(req, post:restaurant_comment, restaurantId) {
        let comment:restaurant_comment;
        comment.userCode = req.userId;
        comment.restaurantId = restaurantId;
        comment.commentContent = post.commentContent;
        comment.rating = post.rating;
    }

    async makeNewRestaurant(location, name) {
        let restaurant:restaurant;

        restaurant.lat = location.lat;
        restaurant.long = location.long;
        restaurant.name = name;

        this.commentRepository.insert(restaurant);
    }
}
