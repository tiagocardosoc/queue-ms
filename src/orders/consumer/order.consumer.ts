import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { OrderDto } from '../dto/order.dto';
import { OrderConsumerService } from './order-consumer.service';

@Controller()
export class OrdersConsumerController {
    constructor(private readonly orderServiceConsumer: OrderConsumerService) { }

    @EventPattern('order.create')
    handleOrderCreated(@Payload() order: OrderDto) {
        return this.orderServiceConsumer.handleOrderPlaced(order)
    }

    @MessagePattern({ cmd: 'fetch-orders' })
    handleFetchOrders() {
        return this.orderServiceConsumer.handleGetOrders()
    }
}
