import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MailConsumerService } from './consumers/mail-consumer.service';
import { MailPublishService } from './publishers/mail.publisher';
import { MailConsumerController } from './consumers/mail.consumer';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'MAIL_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: 'mail-queue'
                },
            }
        ]),
    ],
    controllers: [MailConsumerController],
    providers: [MailConsumerService, MailPublishService],
    exports: [MailConsumerService, MailPublishService]
})
export class MailModule { }
