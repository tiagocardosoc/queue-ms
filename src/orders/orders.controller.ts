import { Body, Controller, Get, Post, HttpStatus, HttpCode } from '@nestjs/common';
import { OrdersServicePublisher } from './publisher/orders.publisher';
import { OrderDto } from './dto/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersServicePublisher: OrdersServicePublisher) { }

  @Post()
  @HttpCode(202)
  registerOrder(@Body() orderDto: OrderDto) {
    try {
      this.ordersServicePublisher.registerOrder(orderDto);
      return {
        statusCode: HttpStatus.ACCEPTED,
        message: 'Order is processing.',
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to register order',
        error: error.message,
      };
    }
  }

  // @Get()
  // getOrders() {
  //   try {
  //     const orders = this.ordersServicePublisher.getOrders();
  //     return {
  //       statusCode: HttpStatus.OK,
  //       message: 'Orders retrieved successfully',
  //       data: orders,
  //     };
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: 'Failed to retrieve orders',
  //       error: error.message,
  //     };
  //   }
  // }
}
