"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const client_module_1 = require("./client/client.module");
const restaurant_module_1 = require("./restaurant/restaurant.module");
const order_module_1 = require("./order/order.module");
const client_controller_1 = require("./client/client.controller");
const restaurant_controller_1 = require("./restaurant/restaurant.controller");
const order_controller_1 = require("./order/order.controller");
const client_service_1 = require("./client/client.service");
const order_service_1 = require("./order/order.service");
const restaurant_service_1 = require("./restaurant/restaurant.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'nox_creation_test',
                retryDelay: 3000,
                autoLoadEntities: true,
                synchronize: true
            }), client_module_1.ClientModule, restaurant_module_1.RestaurantModule, order_module_1.OrderModule],
        controllers: [app_controller_1.AppController, client_controller_1.ClientController, restaurant_controller_1.RestaurantController, order_controller_1.OrderController],
        providers: [app_service_1.AppService, client_service_1.ClientService, restaurant_service_1.RestaurantService, order_service_1.OrderService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map