import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class createUserDto{
    
    @IsNotEmpty()
    @MinLength(3)
    username:string;
    
    @IsNotEmpty()
    @MinLength(3)
    password:string;
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
}