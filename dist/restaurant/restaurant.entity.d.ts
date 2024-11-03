import { Client } from "src/client/client.entity";
import { Order } from "src/order/order.entity";
export declare class Restaurant {
    id: number;
    name: string;
    address: string;
    capacity: number;
    clients: Client[];
    orders: Order[];
}
