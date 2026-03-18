import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'oracle',
    host: '10.72.31.76',
    port: 1521,
    sid: 'ATENA',
    username: configService.get<string>('DB_USERNAME', 'ANAMA#'),
    password: configService.get<string>('DB_PASSWORD', 'DFT12345'),
    // synchronize: false, => Ideal para DBs de produção/leitura, evitamos mexer nas tabelas
    synchronize: false,
    logging: true,
    entities: [__dirname + '/../modules/**/entities/*.entity{.ts,.js}'],
  }),
};
