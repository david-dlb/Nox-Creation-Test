import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderDto, UpdateOrderDto } from './dto/order.dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    create(order: OrderDto): Promise<Order>;
    update(id: string, order: Partial<UpdateOrderDto>): Promise<Order>;
    remove(id: string): Promise<void>;
}
