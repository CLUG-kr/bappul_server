import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { UserService } from './users.service';
import { MailsService } from '../mails/mails.service'
import { User } from '../entities/user.entity'
import { Mail } from '../entities/mail.entity'

@Controller('users')
export class UserController {
    constructor(
        private readonly appService: UserService,
        private readonly mailService: MailsService,
        @InjectRepository(User)
        private usersRepository: Repository<User>
        ) {}

    @Get()
    async findAllUsers() {
        return await this.appService.findAllUsers();
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
            console.log("false");
            return {"answer": "false"};
        }
        else {
            const mail = new Mail();
            mail.mailAddress = userInfo.mailAddress;
            mail.ownerId = userInfo.id
            await this.appService.createNewUser(userInfo);
            await this.mailService.createMailAddress(mail);
            return {"answer": "true"};
        }
    }

    @Delete()
    async deleteAll(): Promise<void> {
        return await this.appService.deleteAll()
    }
    
    @Get('/authentication/:id')
    async checkSameId(@Param('id') id:string): Promise<string> {
        return await this.appService.checkSameId(id);
    }
    
    @Get('/:id')
    async findUser(@Param('id') id:string): Promise<User> {
        return await this.appService.findUserById(id);
    }
    
    @Delete('/:id')
    async deleteUser(@Param('id') id:string): Promise<void> {
        await this.appService.deleteUser(id);
    }

}
