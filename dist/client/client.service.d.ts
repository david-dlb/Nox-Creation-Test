import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { ClientDto, UpdateClientDto } from './dto/client.dto';
export declare class ClientService {
    private clientRepository;
    constructor(clientRepository: Repository<Client>);
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<Client>;
    create(client: ClientDto): Promise<Client>;
    update(id: number, client: Partial<UpdateClientDto>): Promise<void>;
    remove(id: number): Promise<void>;
}
