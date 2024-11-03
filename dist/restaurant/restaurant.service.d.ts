import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { RestaurantDto, UpdateRestaurantDto } from './dto/restaurant.dto';
import { Client } from 'src/client/client.entity';
export declare class RestaurantService {
    private restaurantRepository;
    private clientRepository;
    constructor(restaurantRepository: Repository<Restaurant>, clientRepository: Repository<Client>);
    findAll(): Promise<Restaurant[]>;
    findOne(id: number): Promise<Restaurant>;
    create(restaurantDto: RestaurantDto): Promise<Restaurant | null>;
    update(id: number, updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant | null>;
    remove(id: number): Promise<void>;
    removeClient(clientId: number, restaurantId: number): Promise<Restaurant | null>;
}
