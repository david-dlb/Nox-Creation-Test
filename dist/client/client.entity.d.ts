import { Order } from "src/order/order.entity";
import { Restaurant } from "src/restaurant/restaurant.entity";
export declare class Client {
    id: number;
    name: string;
    email: string;
    phone: string;
    age: number;
    restaurants: Restaurant[];
    orders: Order[];
}
