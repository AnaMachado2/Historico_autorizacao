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
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const Validador_1 = require("./Module/Modules/Validador");
const Vistoria_1 = require("./Module/Modules/Vistoria");
const Veiculo_1 = require("./Module/Modules/Veiculo");
config_1.ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env'],
});
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'oracle',
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                connectString: process.env.DB_CONNECT_STRING,
                autoLoadEntities: true,
                logging: true,
                synchronize: false,
            }),
            Validador_1.ValidadorModule,
            Vistoria_1.VistoriaModule,
            Veiculo_1.VeiculoModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map