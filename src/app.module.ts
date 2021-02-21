import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import { AppController } from './app.controller'
import { MailsController } from './mails/mails.controller';
import { MailsModule } from './mails/mails.module';
import { AuthModule } from './auth/auth.module';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { BapyakController } from './bapyak/bapyak.controller';
import { BapyakService } from './bapyak/bapyak.service';
import { BapyakModule } from './bapyak/bapyak.module';
import { BapyakCommentModule } from './bapyak_comment/bapyak_comment.module'
import { MypageController } from './mypage/mypage.controller';
import { MypageService } from './mypage/mypage.service';
import { MypageModule } from './mypage/mypage.module';
import "reflect-metadata";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    MailsModule,
    AuthModule,
    RestaurantModule,
    BapyakModule,
    BapyakCommentModule,
    MypageModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
