import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { SerialzedUser, User } from '.';
import { createUserDto } from './createUser.dto';

@Injectable()
export class UsersService {
    
    constructor(@InjectRepository(UserEntity) private readonly userRespository: Repository<UserEntity>)
    {}
    
    private user:User[];
    getUserByUserName(Username: string){
        return this.user.find((user)=>user.Username===Username);
    }

    getUsers(){
        return this.userRespository.find();
    }

    getUseById(Id:number){
        return this.user.find((user)=>user.id===Id);
    }

    createUser(createUserDto:createUserDto){
        const newUser = this.userRespository.create(createUserDto);
        return this.userRespository.save(newUser)
    }

    async findUser(username:string){
        return await this.userRespository.findOne({ where:{
            username:username
        } });
    }
}
