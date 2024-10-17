import { Injectable } from "@nestjs/common";
import { OrderDto } from "../dto/order.dto";

@Injectable()
export class OrderConsumerService {

    orders: OrderDto[] = []

    handleOrderPlaced(order: OrderDto) {
        console.log(`Received new order - costumer: ${order.email} `)
        this.orders.push(order)
    }

    handleGetOrders() {
        return this.orders
    }
}