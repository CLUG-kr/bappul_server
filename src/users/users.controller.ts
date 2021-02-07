import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { UserService } from './users.service';
import { User } from '../entities/user.entity'
import { identity } from 'rxjs';
import { fstat } from 'fs';

@Controller('users')
export class UserController {
    constructor(
        private readonly appService: UserService,
        @InjectRepository(User)
        private usersRepository: Repository<User>
        ) {}

    @Get()
    async findAllUsers() {
        return await this.appService.findAllUsers();
    }

    @Get('/:id')
    async findUser(@Param('id') id:string): Promise<User> {
        return await this.appService.findUser(id);
    }

    @Post()
    async createNewUser(@Body() userInfo: User): Promise<Object> {
        const connection = getConnection()
        const ids: Array<User> = await connection
            .createQueryBuilder()
            .select("user.id")
            .from(User, "user")
            .getMany()
        
        if(ids.find((value) => value.id === userInfo.id)) {
            return {"answer": "아이디가 중복된다ㅋㅋ"};
        }
        else {
            await this.appService.createNewUser(userInfo)
            return {"answer": "등록됨 ㅇㅇ"};
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id:string): Promise<void> {
        await this.appService.deleteUser(id);
    }
}
