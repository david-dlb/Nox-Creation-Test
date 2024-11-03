import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { ClientModule } from './client/client.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { OrderModule } from './order/order.module';
import { ClientController } from './client/client.controller';
import { RestaurantController } from './restaurant/restaurant.controller';
import { OrderController } from './order/order.controller';
import { ClientService } from './client/client.service';
import { OrderService } from './order/order.service';
import { RestaurantService } from './restaurant/restaurant.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nox_creation_test',
    retryDelay: 3000,
    autoLoadEntities: true,
    synchronize: true
  }), ClientModule, RestaurantModule, OrderModule],
  controllers: [AppController, ClientController, RestaurantController, OrderController],
  providers: [AppService, ClientService, RestaurantService, OrderService],
})
export class AppModule {}
