import { ForbiddenException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Order } from './order.entity'; 
import { OrderDto, UpdateOrderDto } from './dto/order.dto';
import { Client } from 'src/client/client.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>, 
    @InjectRepository(Client)
    private clientRepository: Repository<Client>, 
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>, 
  ) {}
  async findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  async findOne(id: number): Promise<Order> {
    return this.orderRepository.findOne({
      where: { id },
      relations: ['restaurant', 'client']
    });
  }

  async create(orderDto: OrderDto) {
    const { description, clientId, restaurantId } = orderDto;

    const client = await this.clientRepository.findOne({ where: { id: clientId } });
    if (!client) {
      throw new NotFoundException('Client not found');
    }

    const restaurant = await this.restaurantRepository.findOne({
      where: { id: restaurantId },
      relations: ['client']
    });
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    // Verificar si el cliente pertenece al restaurante
    if (!restaurant.clients.some(restaurantClient => {
      return restaurantClient.id === clientId})) {
      throw new ForbiddenException('Client does not belong to the specified restaurant');
    }
    
    

    const order = this.orderRepository.create({ description, client, restaurant });

    const savedOrder = await this.orderRepository.save(order);
    return savedOrder;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order | null> {
    const order = await this.orderRepository.findOne({ where: { id }, relations: ['client', 'restaurant'] });
    if (!order) {
      throw new NotFoundException("Order not found")
    }
  
    // Si se proporcionan IDs de clientes, busca los clientes en la base de datos
    if (updateOrderDto.client) {
      const clientEntity = await this.clientRepository.findOne({ where: { id: updateOrderDto.client } });
      if (!clientEntity) {
        throw new NotFoundException("Client not found")
      }
      order.client = clientEntity;
    }
  
    // Si se proporciona un ID de restaurante, busca el restaurante en la base de datos
    if (updateOrderDto.restaurant) {
      const restaurantEntity = await this.restaurantRepository.findOne({ where: { id: updateOrderDto.restaurant } });
      if (!restaurantEntity) {
        throw new NotFoundException("Restaurant not found")
      }
      order.restaurant = restaurantEntity;
    }
  
    // Actualiza los otros campos de la orden, excepto las relaciones
    delete updateOrderDto.client; // Evitar sobrescribir el cliente cargado
    delete updateOrderDto.restaurant; // Evitar sobrescribir el restaurante cargado
    Object.assign(order, updateOrderDto);
  
    return this.orderRepository.save(order);
  }

  async remove(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
  
}
