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
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_service_1 = require("./client.service");
const client_dto_1 = require("./dto/client.dto");
const client_entity_1 = require("./client.entity");
let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    async findAll() {
        return this.clientService.findAll();
    }
    async findOne(id) {
        return this.clientService.findOne(parseInt(id));
    }
    async create(client) {
        if (client.age < 18) {
            return new common_1.NotAcceptableException("Age not acceptable");
        }
        return this.clientService.create(client);
    }
    async update(id, client) {
        return this.clientService.update(parseInt(id), client);
    }
    async remove(id) {
        return this.clientService.remove(parseInt(id));
    }
};
exports.ClientController = ClientController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all clients' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a client' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a client' }),
    (0, swagger_1.ApiBody)({
        type: client_dto_1.ClientDto,
    }),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_dto_1.ClientDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a client' }),
    (0, swagger_1.ApiBody)({
        type: client_entity_1.Client,
    }),
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove a client' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "remove", null);
exports.ClientController = ClientController = __decorate([
    (0, common_1.Controller)('client'),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientController);
//# sourceMappingURL=client.controller.js.map