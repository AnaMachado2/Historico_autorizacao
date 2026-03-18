import { ApiProperty } from '@nestjs/swagger';

export class VeiculoResponseDto {
  @ApiProperty({ description: 'Autorização com zero fill', example: '00001' })
  AUTORIZACAO: string;

  @ApiProperty({ description: 'Placa do veículo' })
  NR_PLACA: string;

  @ApiProperty({ description: 'Marca, Modelo e Ano formatados' })
  MARCA_MODELO_ANO: string;

  @ApiProperty({ description: 'Data de início de operação do veículo' })
  DATA_INICIO: Date;

  @ApiProperty({ description: 'Data de fim de operação do veículo', required: false })
  DATA_FIM: Date;
}
