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
exports.UpdateClientDto = exports.ClientDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ClientDto {
}
exports.ClientDto = ClientDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "david",
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClientDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "a@gmail.com",
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClientDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "4245313",
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClientDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 18,
        required: true
    }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ClientDto.prototype, "age", void 0);
class UpdateClientDto {
}
exports.UpdateClientDto = UpdateClientDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "david",
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClientDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "a@gmail.com",
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClientDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "4245313",
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClientDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 18,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateClientDto.prototype, "age", void 0);
//# sourceMappingURL=client.dto.js.map