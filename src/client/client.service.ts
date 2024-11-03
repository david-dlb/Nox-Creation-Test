import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity'; 
import { ClientDto, UpdateClientDto } from './dto/client.dto'; 

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}
  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async findOne(id: number): Promise<Client> {
    return this.clientRepository.findOneBy({ id });
  }

  async create(client: ClientDto): Promise<Client> {
    return this.clientRepository.save(client);
  }

  async update(id: number, client: Partial<UpdateClientDto>): Promise<void> {
    await this.clientRepository.update(id, client);
  }

  async remove(id: number): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
