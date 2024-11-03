import { Client } from "src/client/client.entity";
import { Order } from "src/order/order.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  capacity: number;

  @ManyToMany(() => Client, client => client.restaurants)
  @JoinTable()
  clients: Client[];

  @OneToMany(() => Order, order => order.restaurant)
  orders: Order[];
}