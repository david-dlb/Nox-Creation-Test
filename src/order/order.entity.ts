import { Client } from 'src/client/client.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Order {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string; 

  @ManyToOne(() => Restaurant, restaurant => restaurant.orders)
  restaurant: Restaurant;

  @ManyToOne(() => Client, client => client.orders)
  client: Client;
}