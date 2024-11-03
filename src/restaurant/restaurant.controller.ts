import { Controller, Get, Param, Post, Put, Delete, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { ApiResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant.entity';
import { RestaurantDto, UpdateRestaurantDto } from './dto/restaurant.dto';
 
@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}
    @ApiOperation({ summary: 'Get all restaurants' })
    @Get()
    async findAll() {
      return this.restaurantService.findAll();
    }

    @ApiOperation({ summary: 'Get a restaurant' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.restaurantService.findOne(parseInt(id));
    }
    
    @ApiOperation({ summary: 'Create new restaurant' })
    @ApiBody({
       type: RestaurantDto,
       description: 'Json structure for restaurant object',
    })
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async create(@Body() restaurant: RestaurantDto) {
      return this.restaurantService.create(restaurant);
    }

    @ApiOperation({ summary: 'Update a restaurant' })
    @ApiBody({
       type: UpdateRestaurantDto,
       description: 'Json structure for restaurant object',
    })
    @Put(':id')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async update(@Param('id') id: string, @Body() restaurant: Partial<UpdateRestaurantDto>) {
      return this.restaurantService.update(parseInt(id), restaurant);
    }

    @ApiOperation({ summary: 'Remove a restaurant' })
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return this.restaurantService.remove(parseInt(id));
    }

    @ApiOperation({ summary: 'Remove a client from restaurant' })
    @Delete('/client/:idClient/:idRestaurant')
    async removeClient(@Param('idClient') idClient: string, @Param('idRestaurant') idRestaurant: string) {
      return this.restaurantService.removeClient(parseInt(idClient), parseInt(idRestaurant));
    }
}
