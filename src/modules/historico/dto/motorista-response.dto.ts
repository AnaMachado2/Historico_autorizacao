import { ApiProperty } from '@nestjs/swagger';

export class MotoristaResponseDto {
  @ApiProperty({ description: 'Autorização com zero fill', example: '00001' })
  AUTORIZACAO: string;

  @ApiProperty({ description: 'Nome do motorista / preposto' })
  NM_PREPOSTO: string;

  @ApiProperty({ description: 'CPF do motorista / preposto' })
  NR_CPF_PREPOSTO: string;

  @ApiProperty({ description: 'Data de entrada' })
  DT_ENTRADA_PREPOSTO: Date;

  @ApiProperty({ description: 'Data de saída', required: false })
  DT_SAIDA_PREPOSTO: Date;

  @ApiProperty({ description: 'Categoria Funcional' })
  TX_CATEG_FUNCIONAL: string;
}
