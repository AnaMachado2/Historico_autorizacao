import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HistoricoService } from '../services/historico.service';
import { HistoricoQueryDto } from '../dto/historico-query.dto';
import { PermissionarioResponseDto } from '../dto/permissionario-response.dto';
import { MotoristaResponseDto } from '../dto/motorista-response.dto';
import { VeiculoResponseDto } from '../dto/veiculo-response.dto';

@ApiTags('Historico')
@Controller('historico')
export class HistoricoController {
  constructor(private readonly historicoService: HistoricoService) { }

  @Get('permissionarios')
  @ApiOperation({ summary: 'Obter histórico de permissionários' })
  @ApiResponse({
    status: 200,
    description: 'Lista de permissionários retornada com sucesso',
    type: [PermissionarioResponseDto],
  })
  async getPermissionarios(@Query() query: HistoricoQueryDto) {
    return this.historicoService.getPermissionarios(query);
  }

  @Get('motoristas')
  @ApiOperation({ summary: 'Obter histórico de motoristas/prepostos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de motoristas retornada com sucesso',
    type: [MotoristaResponseDto],
  })
  async getMotoristas(@Query() query: HistoricoQueryDto) {
    return this.historicoService.getMotoristas(query);
  }

  @Get('/veiculos/:sgServico/:nrPermissao')
  async consultarVeiculos(
    @Param('sgServico') sgServico: string,
    @Param('nrPermissao') nrPermissao: string,
  ) {
    return await this.historicoService.getVeiculos(sgServico, nrPermissao);
  }
}
