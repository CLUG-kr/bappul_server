import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BapyakCommentController } from './bapyak_comment.controller'
import { BapyakCommentService } from './bapyak_comment.service'
import { BapyakComment } from '../entities/bapyak_comment.entity'
import { UserService } from '../users/users.service'
import { Bapyak } from '../entities/bapyak.entity'
import { User } from '../entities/user.entity'

@Module({
    imports: [TypeOrmModule.forFeature([BapyakComment, Bapyak, User])],
    controllers: [BapyakCommentController],
    providers: [BapyakCommentService, UserService],
    exports: [BapyakCommentService]
})
export class BapyakCommentModule {}
