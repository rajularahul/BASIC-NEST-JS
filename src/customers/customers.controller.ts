import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { Request, Response } from 'express';
import { CreateUserDto } from './dto/CreatUser.dto';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customerService:CustomersService){}
    @Get('')
    getUser(){
        return this.customerService.findUser();
    }

    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id:number,@Req() req:Request,@Res() res:Response){
        var customer = this.customerService.findUserById(id);
        if(customer){
            res.send(customer);
        }
        else{
            res.status(400).send({msg:"customer not found"});
        }
    }

    @Post('create')
    createUser(@Body() createUserDto:CreateUserDto){
        this.customerService.createCustomer(createUserDto);
    }

}
