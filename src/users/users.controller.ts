import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
import { SerialzedUser } from '.';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly usersService:UsersService){}
    
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getAllUsers(){
        return this.usersService.getUsers();
    }
    
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:userName')
    getUser(@Param('userName') userName:string){
        const user = this.usersService.getUserByUserName(userName);
        if(user){
            return new SerialzedUser(user);
        }
        else{
            throw new HttpException("User Not found",HttpStatus.BAD_REQUEST)
        }
    }
}
