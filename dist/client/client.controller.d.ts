import { NotAcceptableException } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto, UpdateClientDto } from './dto/client.dto';
import { Client } from './client.entity';
export declare class ClientController {
    private clientService;
    constructor(clientService: ClientService);
    findAll(): Promise<Client[]>;
    findOne(id: string): Promise<Client>;
    create(client: ClientDto): Promise<Client | NotAcceptableException>;
    update(id: string, client: Partial<UpdateClientDto>): Promise<void>;
    remove(id: string): Promise<void>;
}
