import { Controller } from '@nestjs/common';
import { Post, UseGuards, Request } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req){

    }
    
}
