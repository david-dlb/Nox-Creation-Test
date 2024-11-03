import { Controller, Get, Param, Post, Put, Delete, Body, NotAcceptableException, ValidationPipe, UsePipes } from '@nestjs/common';
import { ApiResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { ClientService } from './client.service';
import { ClientDto, UpdateClientDto } from './dto/client.dto'; 
import { Client } from './client.entity';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}
    @ApiOperation({ summary: 'Get all clients' })
    @Get()
    async findAll() {
        return this.clientService.findAll();
    }

    @ApiOperation({ summary: 'Get a client' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.clientService.findOne(parseInt(id));
    }

    @ApiOperation({ summary: 'Create a client' })
    @ApiBody({
       type: ClientDto,
    })
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async create(@Body() client: ClientDto) {
        if (client.age < 18) {
            return new NotAcceptableException("Age not acceptable")
        }
        return this.clientService.create(client);
    }

    @ApiOperation({ summary: 'Update a client' })
    @ApiBody({
       type: Client,
    })
    @Put(':id')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async update(@Param('id') id: string, @Body() client: Partial<UpdateClientDto>) {
        return this.clientService.update(parseInt(id), client);
    }

    @ApiOperation({ summary: 'Remove a client' })
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.clientService.remove(parseInt(id));
    }
}
