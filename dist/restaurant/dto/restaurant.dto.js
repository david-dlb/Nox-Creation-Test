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
exports.RestaurantDto = exports.UpdateRestaurantDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateRestaurantDto {
}
exports.UpdateRestaurantDto = UpdateRestaurantDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'david',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRestaurantDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'calle 54',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRestaurantDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 65,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateRestaurantDto.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [1, 5],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], UpdateRestaurantDto.prototype, "clients", void 0);
class RestaurantDto {
}
exports.RestaurantDto = RestaurantDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "david",
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RestaurantDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "calle 54",
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RestaurantDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 65,
        required: true
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], RestaurantDto.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [1, 5],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], RestaurantDto.prototype, "clients", void 0);
//# sourceMappingURL=restaurant.dto.js.map