import { Module } from '@nestjs/common';
import { OrdersServicePublisher } from './publisher/orders.publisher';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderConsumerService } from './consumer/order-consumer.service';
import { OrdersConsumerController } from './consumer/order.consumer';
import { MailPublishService } from 'src/email/publishers/mail.publisher';
import { MailModule } from 'src/email/email.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'orders-queue'
        },
      }
    ]),
    MailModule,
    DatabaseModule
  ],
  controllers: [OrdersController, OrdersConsumerController],
  providers: [OrdersServicePublisher, OrderConsumerService],
})
export class OrdersModule { }
