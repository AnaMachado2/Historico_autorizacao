import { Module } from '@nestjs/common';
import { HistoricoController } from './controllers/historico.controller';
import { HistoricoService } from './services/historico.service';
import { HistoricoRepository } from './repositories/historico.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricoEntity } from './entities/historico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoricoEntity])],
  controllers: [HistoricoController],
  providers: [HistoricoService, HistoricoRepository],
  exports: [HistoricoService],
})
export class HistoricoModule {}
