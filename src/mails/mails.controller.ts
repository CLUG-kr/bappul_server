import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { stringify } from 'querystring';
import { MailsService } from './mails.service'

@Controller('mails')
export class MailsController {
    constructor(private readonly appService: MailsService) {}

    @Delete()
    async deleteAll(): Promise<void> {
        this.appService.deleteAll();
    }

    @Get('/authentication/:mailAddress') 
    async doublecheckEmail(@Param('mailAddress') mail:string): Promise<string> {
        return this.appService.doublecheckEmail(mail)
    }
}
