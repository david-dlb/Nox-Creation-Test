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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDto = exports.UpdateOrderDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateOrderDto {
}
exports.UpdateOrderDto = UpdateOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'pizza',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "client", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "restaurant", void 0);
class OrderDto {
}
exports.OrderDto = OrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'pizza',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], OrderDto.prototype, "clientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], OrderDto.prototype, "restaurantId", void 0);
//# sourceMappingURL=order.dto.js.map