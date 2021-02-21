import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bapyak } from '../entities/bapyak.entity';
import { BapyakController } from './bapyak.controller';
import { BapyakService } from './bapyak.service';
import { UserService } from '../users/users.service'
import { User } from '../entities/user.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Bapyak, User])],
    controllers: [BapyakController],
    providers: [BapyakService, UserService],
    exports: [BapyakService]
})
export class BapyakModule {}
