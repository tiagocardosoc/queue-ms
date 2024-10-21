import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from '../dto/order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersServicePublisher {
    constructor(@Inject('ORDERS_SERVICE') private rabbitClient: ClientProxy) { }

    registerOrder(order: OrderDto) {
        this.rabbitClient.emit('order.create', order)

        return "The order will be registered soon."
    }
}
