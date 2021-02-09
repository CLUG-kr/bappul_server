import { Injectable } from '@nestjs/common';
import { UserService } from '../users/users.service'

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    async validateUser(id: string, pass: string): Promise<any> {
        const user = await this.usersService.findUser(id);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
