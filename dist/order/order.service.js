"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./order.entity");
const client_entity_1 = require("../client/client.entity");
const restaurant_entity_1 = require("../restaurant/restaurant.entity");
let OrderService = class OrderService {
    constructor(orderRepository, clientRepository, restaurantRepository) {
        this.orderRepository = orderRepository;
        this.clientRepository = clientRepository;
        this.restaurantRepository = restaurantRepository;
    }
    async findAll() {
        return this.orderRepository.find();
    }
    async findOne(id) {
        return this.orderRepository.findOne({
            where: { id },
            relations: ['restaurant', 'client']
        });
    }
    async create(orderDto) {
        const { description, clientId, restaurantId } = orderDto;
        const client = await this.clientRepository.findOne({ where: { id: clientId } });
        if (!client) {
            throw new common_1.NotFoundException('Client not found');
        }
        const restaurant = await this.restaurantRepository.findOne({
            where: { id: restaurantId },
            relations: ['client']
        });
        if (!restaurant) {
            throw new common_1.NotFoundException('Restaurant not found');
        }
        if (!restaurant.clients.some(restaurantClient => {
            return restaurantClient.id === clientId;
        })) {
            throw new common_1.ForbiddenException('Client does not belong to the specified restaurant');
        }
        const order = this.orderRepository.create({ description, client, restaurant });
        const savedOrder = await this.orderRepository.save(order);
        return savedOrder;
    }
    async update(id, updateOrderDto) {
        const order = await this.orderRepository.findOne({ where: { id }, relations: ['client', 'restaurant'] });
        if (!order) {
            throw new common_1.NotFoundException("Order not found");
        }
        if (updateOrderDto.client) {
            const clientEntity = await this.clientRepository.findOne({ where: { id: updateOrderDto.client } });
            if (!clientEntity) {
                throw new common_1.NotFoundException("Client not found");
            }
            order.client = clientEntity;
        }
        if (updateOrderDto.restaurant) {
            const restaurantEntity = await this.restaurantRepository.findOne({ where: { id: updateOrderDto.restaurant } });
            if (!restaurantEntity) {
                throw new common_1.NotFoundException("Restaurant not found");
            }
            order.restaurant = restaurantEntity;
        }
        delete updateOrderDto.client;
        delete updateOrderDto.restaurant;
        Object.assign(order, updateOrderDto);
        return this.orderRepository.save(order);
    }
    async remove(id) {
        await this.orderRepository.delete(id);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __param(2, (0, typeorm_1.InjectRepository)(restaurant_entity_1.Restaurant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
//# sourceMappingURL=order.service.js.map