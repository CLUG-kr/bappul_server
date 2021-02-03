import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity'

@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) {}

    @Get('/users/user')
    async findUserById(@Query('id') userId:string): Promise<User> {
        return await this.appService.findUserByStudentId(userId);
    }

    @Post()
    async createNewUser(@Body() userInfo: User): Promise<void> {
        await this.appService.createNewUser(userInfo)
    }
    
}
