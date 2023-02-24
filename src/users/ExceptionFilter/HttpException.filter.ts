import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request,Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception:HttpException, host:ArgumentsHost){
        console.log(exception.getResponse());
        console.log(exception.getStatus());
        console.log(exception);
        
        const ctx=host.switchToHttp();
        const req=ctx.getRequest();
        const res=ctx.getResponse();

        res.sendStatus(exception.getStatus());
    }
}
