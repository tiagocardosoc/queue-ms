import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from './email/email.module';
import { DatabaseModule } from './database/database.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { join } from 'path';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'anyuser',
      password: 'anypass',
      database: 'queue-ms-db',
      autoLoadEntities: true,
      synchronize: true
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: true,
        service: 'gmail',
        auth: {
          user: 'tcardosoc.dev@gmail.com',
          pass: 'avns vzdv iyep stro',
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        options: {
          strict: true,
        },
      }
    }),
    OrdersModule, MailModule, DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
