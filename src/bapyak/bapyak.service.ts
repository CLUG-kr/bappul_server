import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bapyak } from '../entities/bapyak.entity'
import { SerchOption } from '../entities/serchOption'
import { UserService } from '../users/users.service'

@Injectable()
export class BapyakService {
    constructor(
        @InjectRepository(Bapyak)
        private bapYakRepository: Repository<Bapyak>,

        private readonly userService: UserService,
    ){}

    async postNewBapyak(req, posting) {
        const user = await this.userService.findUserByCode(req.user.userId)
        const newBapyak = {
            userCode: req.user.userId,
            userGender: user.gender,
            userName: user.name,
            userEntranceYear: user.entranceYear,
            major: user.department,
            title: posting.title,
            content: posting.content,
            bapyakMode: posting.bapyakMode,
        }
        this.bapYakRepository.insert(newBapyak);
    }

    async showBapyaks(requestCount, serchOption:SerchOption) {

        if(serchOption.gender != "none") {
            if(serchOption.mode != "none") {
                if(serchOption.major != "none") {
                    return await this.bapYakRepository.findAndCount({
                        order: {
                            createdDate: 'DESC'
                            },
                        skip: (requestCount-1)*20,
                        take: 20,
                        where: {
                            "userGender": serchOption.gender,
                            "bapyakMode": serchOption.mode,
                            "major": serchOption.major
                        }
                    })
                }
                else {
                    return await this.bapYakRepository.findAndCount({
                        order: {
                            createdDate: 'DESC'
                            },
                        skip: (requestCount-1)*20,
                        take: 20,
                        where: {
                            "userGender": serchOption.gender,
                            "bapyakMode": serchOption.mode,
                        }
                    })
                }
            }

            else {
                if(serchOption.major != "none") {
                    return await this.bapYakRepository.findAndCount({
                        order: {
                            createdDate: 'DESC'
                            },
                        skip: (requestCount-1)*20,
                        take: 20,
                        where: {
                            "userGender": serchOption.gender,
                            "major": serchOption.major
                        }
                    })
                }
                else {
                    console.log("hi")
                    return await this.bapYakRepository.findAndCount({
                        order: {
                            createdDate: 'DESC'
                            },
                        skip: (requestCount-1)*20,
                        take: 20,
                        where: {
                            "userGender": serchOption.gender,
                        }
                    })
                }
            }
        }

        else {
            if(serchOption.mode != "none") {
                if(serchOption.major != "none") {
                    return await this.bapYakRepository.findAndCount({
                        order: {
                            createdDate: 'DESC'
                            },
                        skip: (requestCount-1)*20,
                        take: 20,
                        where: {
                            "bapyakMode": serchOption.mode,
                            "major": serchOption.major
                        }
                    })
                }
                else {
                    return await this.bapYakRepository.findAndCount({
                        order: {
                            createdDate: 'DESC'
                            },
                        skip: (requestCount-1)*20,
                        take: 20,
                        where: {
                            "bapyakMode": serchOption.mode,
                        }
                    })
                }
            }

            else {
                if(serchOption.major != "none") {
                    return await this.bapYakRepository.findAndCount({
                        order: {
                            createdDate: 'DESC'
                            },
                        skip: (requestCount-1)*20,
                        take: 20,
                        where: {
                            "major": serchOption.major
                        }
                    })
                }
                else {
                    return await this.bapYakRepository.findAndCount({
                        order: {
                            createdDate: 'DESC'
                            },
                        skip: (requestCount-1)*20,
                        take: 20
                    })
                }
            }
        }        
    }

    async deleteAll() {
        this.bapYakRepository.delete({})
    }
}
