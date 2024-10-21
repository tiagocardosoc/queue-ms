import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { OrderDto } from "src/orders/dto/order.dto";

@Injectable()
export class MailConsumerService {
    constructor(private readonly mailerService: MailerService) { }

    async sendMailToConfirmOrder(to: string, order: OrderDto) {
        await this.mailerService.sendMail({
            to,
            subject: 'Confirmação do pedido',
            template: './orderConfirmation',
            context: {
                order
            }
        })
    }
}