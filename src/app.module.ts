import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import { AppController } from './app.controller'
import { MailsController } from './mails/mails.controller';
import { MailsModule } from './mails/mails.module';
import { AuthModule } from './auth/auth.module';
import "reflect-metadata";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    MailsModule,
    AuthModule
  ],
  controllers: [AppController, MailsController],
  providers: [],
})
export class AppModule {}
