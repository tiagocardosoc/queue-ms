import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from '../dto/order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersServicePublisher {
    constructor(@Inject('ORDERS_SERVICE') private rabbitClient: ClientProxy) { }

    placeOrder(order: OrderDto) {
        this.rabbitClient.emit('order.create', order)

        return { message: 'Order placed!' }
    }

    getOrders() {
        return this.rabbitClient.send({ cmd: 'fetch-orders' }, {})
    }
}
