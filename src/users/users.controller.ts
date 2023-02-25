import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, UseFilters, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { SerialzedUser } from '.';
import { createUserDto } from './createUser.dto';
import { HttpExceptionFilter } from './ExceptionFilter/HttpException.filter';
import { UserNotFoundException } from './UserNotFoundException';
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
    @Get('/username/:userName')
    getUserByName(@Param('userName') userName:string){
        const user = this.usersService.getUserByUserName(userName);
        if(user){
            return new SerialzedUser(user);
        }
        else{
            throw new HttpException("User Not found",HttpStatus.BAD_REQUEST)
        }
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
    @Get('/Id/:Id')
    getUserById(@Param('Id',ParseIntPipe) Id:number){
        const user = this.usersService.getUseById(Id);
        if(user){
            return new SerialzedUser(user);
        }
        else{
            throw new UserNotFoundException();
        }
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUser:createUserDto){
        return this.usersService.createUser(createUser);
    }
}
