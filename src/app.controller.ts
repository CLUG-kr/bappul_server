import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    sayHello() {
        return "hello";
    }
}
