import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { validateCustomerMiddleware } from './validate-customer.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule
{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(validateCustomerMiddleware).forRoutes({
      path: 'customers/:id',
      method:RequestMethod.GET,
    })
    //throw new Error('Method not implemented.');
  }

}
