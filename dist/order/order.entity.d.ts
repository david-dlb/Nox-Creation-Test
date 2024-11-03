import { Client } from 'src/client/client.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
export declare class Order {
    id: number;
    description: string;
    restaurant: Restaurant;
    client: Client;
}
