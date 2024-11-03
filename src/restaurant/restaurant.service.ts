import { ForbiddenException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity'; 
import { RestaurantDto, UpdateRestaurantDto } from './dto/restaurant.dto';
import { Client } from 'src/client/client.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>, 
  ) {}
  async findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  async findOne(id: number): Promise<Restaurant> {
    return this.restaurantRepository.findOneBy({ id });
  }

  async create(restaurantDto: RestaurantDto): Promise<Restaurant | null> {
    const { name, address, capacity } = restaurantDto
    let clients = null
    if (restaurantDto.clients != null && restaurantDto.clients.length > 0) {
      clients = await Promise.all(restaurantDto.clients.map(id => this.clientRepository.findOne({ where: { id: id } })))
      const missingClients = clients.filter(client => client === null);
      if (missingClients.length > 0) {
        const missingClientIds = missingClients.map((_, index) => restaurantDto.clients[index]);
        throw new NotFoundException({
          error: 'Clients not found',
          missingClientIds: missingClientIds
        });
      }
    }
    
    if (clients != null && clients.length > restaurantDto.capacity) {
      throw new ForbiddenException("Restaurant is full of capacity");
    }

    const restaurant = this.restaurantRepository.create({ ...RestaurantDto, clients: clients, name: name, address: address, capacity: capacity  || 1 });
 
    return await this.restaurantRepository.save(restaurant); 
  }

  async update(id: number, updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant | null> {
    const restaurant = await this.restaurantRepository.findOne({ where: { id }, relations: ['clients'] });
    if (!restaurant) {
        throw new NotFoundException("Restaurant not found")
    }

    if (updateRestaurantDto.clients && updateRestaurantDto.clients.length > 0) {
      const clientEntities = await this.clientRepository.find({
        where: { id: In(updateRestaurantDto.clients) },
      });

      if (clientEntities.length !== updateRestaurantDto.clients.length) {
        throw new NotFoundException("Some clients were not found")
      }

      const updatedClients = Array.from(new Set([...restaurant.clients, ...clientEntities]));
      restaurant.clients = updatedClients;
    }

    delete updateRestaurantDto.clients; 
    Object.assign(restaurant, updateRestaurantDto);


    if (restaurant.clients != null && restaurant.clients.length  > restaurant.capacity) {
      throw new ForbiddenException("Restaurant is full of capacity");
    }

    return this.restaurantRepository.save(restaurant);
  }

  async remove(id: number): Promise<void> {
    await this.restaurantRepository.delete(id);
  }

  async removeClient(clientId: number, restaurantId: number): Promise<Restaurant | null> {
    const restaurant = await this.restaurantRepository.findOne({
      where: { id: restaurantId },
      relations: ['clients'],
    });
  
    if (!restaurant) {
      throw new NotFoundException("Restaurant not found")
    }
  
    const clientIndex = restaurant.clients.findIndex(client => client.id === clientId);
    if (clientIndex === -1) {
      throw new NotFoundException("Client not found in the restaurant")
    }
  
    restaurant.clients.splice(clientIndex, 1);
  
    return this.restaurantRepository.save(restaurant);
  }
}
