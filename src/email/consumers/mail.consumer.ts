import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MailConsumerService } from './mail-consumer.service';
import { OrderDto } from 'src/orders/dto/order.dto';

@Controller()
export class MailConsumerController {
    constructor(private readonly orderServiceConsumer: MailConsumerService) { }

    @EventPattern('mail_send')
    handleOrderCreated(@Payload() data: OrderDto) {
        return this.orderServiceConsumer.sendMailToConfirmOrder(data.buyerMail, data)
    }
}
