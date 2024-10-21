
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderRepository {
    constructor(
        @InjectRepository(OrderEntity)
        private orderRepository: Repository<OrderEntity>,
    ) { }

    async save(orderData: Omit<OrderEntity, 'id'>): Promise<OrderEntity> {
        return await this.orderRepository.save(orderData)
    }

    async findAll(): Promise<OrderEntity[]> {
        return await this.orderRepository.find();
    }

    async findOne(id: number): Promise<OrderEntity | null> {
        return await this.orderRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.orderRepository.delete(id);
    }
}
