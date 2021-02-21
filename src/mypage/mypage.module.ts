import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MypageController } from './mypage.controller'
import { MypageService } from './mypage.service'
import { UserService } from '../users/users.service'
import { Bapyak } from '../entities/bapyak.entity'
import { User } from '../entities/user.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Bapyak, User])],
    controllers: [MypageController],
    providers: [MypageService, UserService],
    exports: [MypageService]
})
export class MypageModule {}
