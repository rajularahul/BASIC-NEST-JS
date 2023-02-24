import { Injectable, Param } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerialzedUser, User } from '.';

@Injectable()
export class UsersService {
    private user:User[]=
    [
        {
        id:1,
        Username:'rrr',
        Password:'rrr',
        },
        {
            id:2,
            Username:'jjj',
            Password:'jjj',
        },
        {
            id:3,
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

    getUseById(Id:number){
        return this.user.find((user)=>user.id===Id);
    }
}
