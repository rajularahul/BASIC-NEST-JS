import { Inject, Injectable } from '@nestjs/common';
import { comparePasswords } from 'src/encrypt/bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE')private readonly userService:UsersService){}
    
    async validateUser(username:string ,password:string){
        const userDB= await this.userService.findUser(username);
        const userPsswd = comparePasswords(password,userDB.password)
        if(userDB && userPsswd){
            console.log("log in successfull")
            return userDB;
        }
        else return null;

    }
}
