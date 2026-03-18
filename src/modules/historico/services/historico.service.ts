import { Injectable } from '@nestjs/common';
import { HistoricoQueryDto } from '../dto/historico-query.dto';
import { HistoricoRepository } from '../repositories/historico.repository';
import { PermissionarioResponseDto } from '../dto/permissionario-response.dto';
import { MotoristaResponseDto } from '../dto/motorista-response.dto';
import { VeiculoResponseDto } from '../dto/veiculo-response.dto';

@Injectable()
export class HistoricoService {
  constructor(private readonly historicoRepository: HistoricoRepository) {}

  async getPermissionarios(query: HistoricoQueryDto): Promise<PermissionarioResponseDto[]> {
    return this.historicoRepository.findPermissionarios(query);
  }

  async getMotoristas(query: HistoricoQueryDto): Promise<MotoristaResponseDto[]> {
    return this.historicoRepository.findMotoristas(query);
  }

  async getVeiculos(query: HistoricoQueryDto): Promise<VeiculoResponseDto[]> {
    return this.historicoRepository.findVeiculos(query);
  }
}
