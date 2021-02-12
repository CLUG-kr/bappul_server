import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bapyak } from '../entities/bapyak.entity';
import { BapyakController } from './bapyak.controller';
import { BapyakService } from './bapyak.service';

@Module({
    imports: [TypeOrmModule.forFeature([Bapyak])],
    controllers: [BapyakController],
    providers: [BapyakService],
    exports: [BapyakService]
})
export class BapyakModule {}
