import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import entities, { User } from './typeorm';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'R@hul123',
    database:'classicmodels',
    entities:entities,
    synchronize:true,
  }), CustomersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
