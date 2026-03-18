import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class HistoricoQueryDto {
  @ApiPropertyOptional({
    description: 'Número da permissão para filtro (ex: 00001)',
    example: '00001',
  })
  @IsOptional()
  @IsString()
  nrPermissao?: string;

  @ApiPropertyOptional({
    description: 'Sigla do serviço (ex: TAXI)',
    example: 'TAXI',
  })
  @IsOptional()
  @IsString()
  sgServico?: string;
}
