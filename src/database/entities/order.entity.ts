
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    quantity: number;

    @Column()
    buyerMail: string
}
