import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
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
                    return await this.bapYakRepository.find({
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
                    return await this.bapYakRepository.find({
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
                    return await this.bapYakRepository.find({
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
                    return await this.bapYakRepository.find({
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
                    return await this.bapYakRepository.find({
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
                    return await this.bapYakRepository.find({
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
                    return await this.bapYakRepository.find({
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
                    return await this.bapYakRepository.find({
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

    async serchBapyaks(requestCount:number, serchOption:SerchOption, keyword:string) {
        const connection = getConnection()
        const bapyakTitles: Array<Bapyak> = await connection
            .createQueryBuilder()
            .select("bapyak.title")
            .from(Bapyak, "bapyak")
            .getMany()
                
        let serchedBapyakTitles = []        
        bapyakTitles.forEach((title) => {
            if(title.title.indexOf(keyword)!==-1 && serchedBapyakTitles.indexOf(title.title)===-1) {
                serchedBapyakTitles.push(title.title)
            }
        })

        let serchedBapyaks = []
        
        if(serchOption.gender != "none") {
            if(serchOption.mode != "none") {
                if(serchOption.major != "none") {
                    for(const title of serchedBapyakTitles) {
                        let arrayHavingTitle = await this.bapYakRepository.find({
                            order: {
                                createdDate: 'DESC'
                                },
                            skip: (requestCount-1)*20,
                            take: 20,
                            where: {
                                "title": title,
                                "userGender": serchOption.gender,
                                "bapyakMode": serchOption.mode,
                                "major": serchOption.major
                            }
                        });

                        for (const element of arrayHavingTitle) {
                            serchedBapyaks.push(element);
                        }
                    }
                    return serchedBapyaks
                }
                else {
                    for(const title of serchedBapyakTitles) {
                        let arrayHavingTitle = await this.bapYakRepository.find({
                            order: {
                                createdDate: 'DESC'
                                },
                            skip: (requestCount-1)*20,
                            take: 20,
                            where: {
                                "title": title,
                                "userGender": serchOption.gender,
                                "bapyakMode": serchOption.mode,
                            }
                        });

                        for (const element of arrayHavingTitle) {
                            serchedBapyaks.push(element);
                        }
                    }
                    return serchedBapyaks
                }
            }

            else {
                if(serchOption.major != "none") {
                    for(const title of serchedBapyakTitles) {
                        let arrayHavingTitle = await this.bapYakRepository.find({
                            order: {
                                createdDate: 'DESC'
                                },
                            skip: (requestCount-1)*20,
                            take: 20,
                            where: {
                                "title": title,
                                "userGender": serchOption.gender,
                                "major": serchOption.major
                            }
                        });

                        for (const element of arrayHavingTitle) {
                            serchedBapyaks.push(element);
                        }
                    }
                    return serchedBapyaks
                }
                else {
                    for(const title of serchedBapyakTitles) {
                        let arrayHavingTitle = await this.bapYakRepository.find({
                            order: {
                                createdDate: 'DESC'
                                },
                            skip: (requestCount-1)*20,
                            take: 20,
                            where: {
                                "title": title,
                                "userGender": serchOption.gender,
                            }
                        });

                        for (const element of arrayHavingTitle) {
                            serchedBapyaks.push(element);
                        }
                    }
                    return serchedBapyaks
                }
            }
        }

        else {
            if(serchOption.mode != "none") {
                if(serchOption.major != "none") {
                    for(const title of serchedBapyakTitles) {
                        let arrayHavingTitle = await this.bapYakRepository.find({
                            order: {
                                createdDate: 'DESC'
                                },
                            skip: (requestCount-1)*20,
                            take: 20,
                            where: {
                                "title": title,
                                "bapyakMode": serchOption.mode,
                                "major": serchOption.major
                            }
                        });

                        for (const element of arrayHavingTitle) {
                            serchedBapyaks.push(element);
                        }
                    }
                    return serchedBapyaks
                }
                else {
                    for(const title of serchedBapyakTitles) {
                        let arrayHavingTitle = await this.bapYakRepository.find({
                            order: {
                                createdDate: 'DESC'
                                },
                            skip: (requestCount-1)*20,
                            take: 20,
                            where: {
                                "title": title,
                                "bapyakMode": serchOption.mode,
                            }
                        });

                        for (const element of arrayHavingTitle) {
                            serchedBapyaks.push(element);
                        }
                    }
                    return serchedBapyaks
                }
            }

            else {
                if(serchOption.major != "none") {
                    for(const title of serchedBapyakTitles) {
                        let arrayHavingTitle = await this.bapYakRepository.find({
                            order: {
                                createdDate: 'DESC'
                                },
                            skip: (requestCount-1)*20,
                            take: 20,
                            where: {
                                "title": title,
                                "major": serchOption.major
                            }
                        });

                        for (const element of arrayHavingTitle) {
                            serchedBapyaks.push(element);
                        }
                    }
                    return serchedBapyaks
                }
                else {
                    for(const title of serchedBapyakTitles) {
                        let arrayHavingTitle = await this.bapYakRepository.find({
                            order: {
                                createdDate: 'DESC'
                                },
                            skip: (requestCount-1)*20,
                            take: 20,
                            where: {
                                "title": title,
                            }
                        });

                        for (const element of arrayHavingTitle) {
                            serchedBapyaks.push(element);
                        }
                    }
                    return serchedBapyaks
                }
            }  
        }
    }

    async deleteAll() {
        this.bapYakRepository.delete({})
    }
}
