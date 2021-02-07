import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mail } from '../entities/mail.entity';
import { MailsController } from './mails.controller';
import { MailsService } from './mails.service'

@Module({
    imports: [TypeOrmModule.forFeature([Mail])],
    controllers: [MailsController],
    providers: [MailsService],
    exports: [MailsService]
})
export class MailsModule {}
