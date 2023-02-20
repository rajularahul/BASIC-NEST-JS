import { Injectable, Param } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerialzedUser, User } from '.';

@Injectable()
export class UsersService {
    private user:User[]=
    [
        {
        Username:'rrr',
        Password:'rrr',
        },
        {
            Username:'jjj',
            Password:'jjj',
        },
        {
            Username:'kkk',
            Password:'kkk',
        },
    ]

    getUserByUserName(Username: string){
        return this.user.find((user)=>user.Username===Username);
    }

    getUsers(){
        return this.user.map((user)=> new SerialzedUser(user));
    }
}
