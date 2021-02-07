import { Controller, Get, Param, Query } from '@nestjs/common';
import { stringify } from 'querystring';
import { MailsService } from './mails.service'

@Controller('mails')
export class MailsController {
    constructor(private readonly appService: MailsService) {}

    @Get('/authentication/:mailAddress') 
    async doublecheckEmail(@Param('mailAddress') mail:string): Promise<string> {
        return this.appService.doublecheckEmail(mail)
    }
}
