import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { OrderService } from './Order.service';
import { Order } from './Order.entity';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

    @Get()
    async findAll() {
        return this.orderService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.orderService.findOne(parseInt(id));
    }

    @Post()
    async create(@Body() Order: Order) {
        return this.orderService.create(Order);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() Order: Partial<Order>) {
        return this.orderService.update(parseInt(id), Order);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.orderService.remove(parseInt(id));
    }
}
