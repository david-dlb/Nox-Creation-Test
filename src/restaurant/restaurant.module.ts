import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurant.entity';
import { Client } from 'src/client/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, Client])],
  controllers: [RestaurantController],
  providers: [RestaurantService],
  exports: [TypeOrmModule]
})
export class RestaurantModule {}
