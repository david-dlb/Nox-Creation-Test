import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Client } from 'src/client/client.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Client, Restaurant])],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [TypeOrmModule]
})
export class OrderModule {}
