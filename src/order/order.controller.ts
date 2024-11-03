import { Controller, Get, Param, Post, Put, Delete, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { ApiResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { ClientService } from 'src/client/client.service';
import { RestaurantService } from 'src/restaurant/restaurant.service';
import { OrderDto, UpdateOrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
    @ApiOperation({ summary: 'Get all orders' })
    @Get()
    async findAll() {
      return this.orderService.findAll();
    }
    @ApiOperation({ summary: 'Get an order' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.orderService.findOne(parseInt(id));
    }
    @ApiOperation({ summary: 'Create a new order' })
    @ApiBody({
       type: OrderDto,
    })
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async create(@Body() order: OrderDto) { 
      return this.orderService.create(order);
    }
    @ApiOperation({ summary: 'Update an order' })
    @ApiBody({
       type: UpdateOrderDto,
    })
    @Put(':id')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async update(@Param('id') id: string, @Body() order: Partial<UpdateOrderDto>) {
      return this.orderService.update(parseInt(id), order);
    }

    @ApiOperation({ summary: 'Remove an order' })
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return this.orderService.remove(parseInt(id));
    }
}
