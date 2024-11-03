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
exports.RestaurantController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const restaurant_service_1 = require("./restaurant.service");
const restaurant_dto_1 = require("./dto/restaurant.dto");
let RestaurantController = class RestaurantController {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    async findAll() {
        return this.restaurantService.findAll();
    }
    async findOne(id) {
        return this.restaurantService.findOne(parseInt(id));
    }
    async create(restaurant) {
        return this.restaurantService.create(restaurant);
    }
    async update(id, restaurant) {
        return this.restaurantService.update(parseInt(id), restaurant);
    }
    async remove(id) {
        return this.restaurantService.remove(parseInt(id));
    }
    async removeClient(idClient, idRestaurant) {
        return this.restaurantService.removeClient(parseInt(idClient), parseInt(idRestaurant));
    }
};
exports.RestaurantController = RestaurantController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all restaurants' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a restaurant' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create new restaurant' }),
    (0, swagger_1.ApiBody)({
        type: restaurant_dto_1.RestaurantDto,
        description: 'Json structure for restaurant object',
    }),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_dto_1.RestaurantDto]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a restaurant' }),
    (0, swagger_1.ApiBody)({
        type: restaurant_dto_1.UpdateRestaurantDto,
        description: 'Json structure for restaurant object',
    }),
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove a restaurant' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove a client from restaurant' }),
    (0, common_1.Delete)('/client/:idClient/:idRestaurant'),
    __param(0, (0, common_1.Param)('idClient')),
    __param(1, (0, common_1.Param)('idRestaurant')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "removeClient", null);
exports.RestaurantController = RestaurantController = __decorate([
    (0, common_1.Controller)('restaurant'),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantController);
//# sourceMappingURL=restaurant.controller.js.map