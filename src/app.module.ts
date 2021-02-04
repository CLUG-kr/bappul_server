import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import "reflect-metadata";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
