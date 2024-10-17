import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersServicePublisher } from './publisher/orders.publisher';
import { OrderDto } from './dto/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersServicePublisher: OrdersServicePublisher) { }

  @Post()
  placeOrder(@Body() orderDto: OrderDto) {
    return this.ordersServicePublisher.placeOrder(orderDto)
  }

  @Get()
  getOrders() {
    return this.ordersServicePublisher.getOrders()
  }
}
