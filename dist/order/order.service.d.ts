import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderDto, UpdateOrderDto } from './dto/order.dto';
import { Client } from 'src/client/client.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
export declare class OrderService {
    private orderRepository;
    private clientRepository;
    private restaurantRepository;
    constructor(orderRepository: Repository<Order>, clientRepository: Repository<Client>, restaurantRepository: Repository<Restaurant>);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    create(orderDto: OrderDto): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order | null>;
    remove(id: number): Promise<void>;
}
