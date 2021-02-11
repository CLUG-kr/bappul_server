import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Mail } from '../entities/mail.entity'
import { UserController } from './users.controller';
import { UserService } from './users.service'
import { MailsService } from '../mails/mails.service'

@Module({
    imports: [TypeOrmModule.forFeature([User, Mail])],
    controllers: [UserController],
    providers: [UserService, MailsService],
    exports: [UserService]
})
export class UserModule {}
