import { Controller } from '@nestjs/common';
import { BapyakService } from './bapyak.service';

@Controller('bapyak')
export class BapyakController {
    constructor(
        private readonly appService: BapyakService
    ){}

    
}
