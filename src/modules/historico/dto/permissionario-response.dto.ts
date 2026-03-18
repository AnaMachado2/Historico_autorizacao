import { ApiProperty } from '@nestjs/swagger';

export class PermissionarioResponseDto {
  @ApiProperty({ description: 'Número da permissão original', example: '1' })
  PERMISSAO: string;

  @ApiProperty({ description: 'Nome da Operadora' })
  NM_OPERADORA: string;

  @ApiProperty({ description: 'Autorização com zero fill', example: '00001' })
  AUTORIZACAO: string;

  @ApiProperty({ description: 'Tipo da permissão' })
  CS_TIPO_PERMISSAO: string;

  @ApiProperty({ description: 'CNH do permissionário' })
  CD_CNH_PF: string;

  @ApiProperty({ description: 'CPF / CNPJ' })
  CPF_CNPJ: string;

  @ApiProperty({ description: 'Data de oficialização' })
  DT_OFICIALIZACAO_PERMISSAO: Date;

  @ApiProperty({ description: 'Data de término da permissão', required: false })
  DT_TERMINO_PERMISSAO: Date;
}
