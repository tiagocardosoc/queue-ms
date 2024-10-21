import { Injectable } from "@nestjs/common";
import { OrderDto } from "../dto/order.dto";
import { MailPublishService } from "src/email/publishers/mail.publisher";
import { OrderRepository } from "src/database/repository/order.repository";

@Injectable()
export class OrderConsumerService {
    constructor(
        private readonly mailPublisherService: MailPublishService,
        private readonly orderRepository: OrderRepository
    ) { }

    async handleOrderRegistration(orderData: OrderDto) {
        await this.orderRepository.save(orderData)
        await this.mailPublisherService.sendMailToQueue(orderData)
    }
}