import { Module } from '@nestjs/common';
import { OrderRepository } from './repository/order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';

@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity])],
    controllers: [],
    providers: [OrderRepository],
    exports: [OrderRepository]
})
export class DatabaseModule { }
