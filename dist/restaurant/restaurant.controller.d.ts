import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant.entity';
import { RestaurantDto, UpdateRestaurantDto } from './dto/restaurant.dto';
export declare class RestaurantController {
    private restaurantService;
    constructor(restaurantService: RestaurantService);
    findAll(): Promise<Restaurant[]>;
    findOne(id: string): Promise<Restaurant>;
    create(restaurant: RestaurantDto): Promise<Restaurant>;
    update(id: string, restaurant: Partial<UpdateRestaurantDto>): Promise<Restaurant>;
    remove(id: string): Promise<void>;
    removeClient(idClient: string, idRestaurant: string): Promise<Restaurant>;
}
