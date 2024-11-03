import { Order } from "src/order/order.entity";
import { Restaurant } from "src/restaurant/restaurant.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Client {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  age: number; 
  
  @ManyToMany(() => Restaurant, restaurant => restaurant.clients)
  restaurants: Restaurant[];

  @OneToMany(() => Order, order => order.client)
  orders: Order[];
}