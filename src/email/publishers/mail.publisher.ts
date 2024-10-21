import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OrderDto } from 'src/orders/dto/order.dto';

@Injectable()
export class MailPublishService {
    constructor(@Inject('MAIL_SERVICE') private rabbitClient: ClientProxy) { }

    async sendMailToQueue(data: OrderDto) {
        this.rabbitClient.emit('mail_send', data)
    }
}
