import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { HistoricoQueryDto } from '../dto/historico-query.dto';

@Injectable()
export class HistoricoRepository {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async findPermissionarios(query: HistoricoQueryDto) {
    let sql = `
      SELECT 
      per.NR_PERMISSAO AS PERMISSAO,
      ope.nm_operadora AS NM_OPERADORA,
      TO_CHAR(per.NR_PERMISSAO , 'FM00000') AS AUTORIZACAO, 
      per.CS_TIPO_PERMISSAO, 
      ope.CD_CNH_PF,
      ope.CPF_CNPJ,
      per.DT_OFICIALIZACAO_PERMISSAO,
      per.dt_termino_permissao AS DT_TERMINO_PERMISSAO
      FROM 
          DFTRANS.vw_operadora ope,
          DFTRANS.permissoes per,
          DFTRANS.servicos ser
      WHERE 
        per.id_operadora = ope.id_operadora
        AND per.id_servico = ser.id_servico
    `;
    
    let paramIndex = 1;
    const parameters: any[] = [];

    if (query.sgServico) {
      sql += ` AND ser.sg_servico = :${paramIndex++} `;
      parameters.push(query.sgServico);
    } else {
      sql += ` AND ser.sg_servico IN ('TAXI') `;
    }

    if (query.nrPermissao) {
      sql += ` AND per.NR_PERMISSAO = :${paramIndex++} `;
      parameters.push(query.nrPermissao);
    } else {
      sql += ` AND per.NR_PERMISSAO IN ('00001') `;
    }

    sql += ` ORDER BY per.CS_TIPO_PERMISSAO`;
    return this.entityManager.query(sql, parameters);
  }

  async findMotoristas(query: HistoricoQueryDto) {
    let sql = `
      SELECT 
      TO_CHAR(per.NR_PERMISSAO , 'FM00000') AS AUTORIZACAO,
      p.NM_PREPOSTO,
      p.NR_CPF_PREPOSTO,
      oap.DT_ENTRADA_PREPOSTO,
      oap.DT_SAIDA_PREPOSTO,
      cf.TX_CATEG_FUNCIONAL
      FROM 
       DFTRANS.VW_OPERADORA vo,
       DFTRANS.OPE_ALOCA_PREP oap,
       DFTRANS.PREPOSTOS p,
       DFTRANS.permissoes per,
       DFTRANS.servicos ser,
       DFTRANS.CATEGORIAS_FUNCIONAIS cf
      WHERE 
       vo.ID_OPERADORA = oap.ID_OPERADORA
       AND oap.ID_PREPOSTO = p.ID_PREPOSTO
       AND oap.ID_PERMISSAO = per.ID_PERMISSAO
       AND per.id_operadora = vo.id_operadora
       AND per.id_servico = ser.id_servico
       AND oap.ID_CATEG_FUNCIONAL = cf.ID_CATEG_FUNCIONAL 
    `;
    
    let paramIndex = 1;
    const parameters: any[] = [];

    if (query.sgServico) {
      sql += ` AND ser.sg_servico = :${paramIndex++} `;
      parameters.push(query.sgServico);
    } else {
      sql += ` AND ser.sg_servico IN ('TAXI') `;
    }

    if (query.nrPermissao) {
      sql += ` AND per.NR_PERMISSAO = :${paramIndex++} `;
      parameters.push(query.nrPermissao);
    } else {
      sql += ` AND per.NR_PERMISSAO IN ('00001') `;
    }

    sql += ` ORDER BY per.DT_OFICIALIZACAO_PERMISSAO`;
    return this.entityManager.query(sql, parameters);
  }

  async findVeiculos(query: HistoricoQueryDto) {
    let sql = `
      SELECT
      TO_CHAR(per.NR_PERMISSAO , 'FM00000') AS AUTORIZACAO,
      VV.NR_PLACA ,
      VV.MARCA  || ' - ' || VV.MODELO|| ' - ' || VV.ANO_FAB AS MARCA_MODELO_ANO,
      VV.DT_INICIO_OPERACAO AS DATA_INICIO,
      VV.DT_FIM_OPERACAO AS DATA_FIM
      FROM 
       DFTRANS.VW_OPERADORA vo,
       DFTRANS.OPE_ALOCA_PREP oap,
       DFTRANS.PREPOSTOS p,
       DFTRANS.permissoes per,
       DFTRANS.servicos ser,
       DFTRANS.CATEGORIAS_FUNCIONAIS cf,
       DFTRANS.VW_VEICULO VV,
       DFTRANS.PERM_POSSUI_VEI ppv 
      WHERE 
       vo.ID_OPERADORA = oap.ID_OPERADORA
       AND oap.ID_PREPOSTO = p.ID_PREPOSTO
       AND oap.ID_PERMISSAO = per.ID_PERMISSAO
       AND per.id_operadora = vo.id_operadora
       AND per.id_servico = ser.id_servico
       AND oap.ID_CATEG_FUNCIONAL = cf.ID_CATEG_FUNCIONAL
       AND VV.ID_PERM_VEI = ppv.ID_PERM_VEI 
       AND ppv.ID_PERMISSAO = per.ID_PERMISSAO
    `;
    
    let paramIndex = 1;
    const parameters: any[] = [];

    if (query.sgServico) {
      sql += ` AND ser.sg_servico = :${paramIndex++} `;
      parameters.push(query.sgServico);
    } else {
      sql += ` AND ser.sg_servico IN ('TAXI') `;
    }

    if (query.nrPermissao) {
      sql += ` AND per.NR_PERMISSAO = :${paramIndex++} `;
      parameters.push(query.nrPermissao);
    } else {
      sql += ` AND per.NR_PERMISSAO IN ('00001') `;
    }

    sql += ` ORDER BY VV.DT_FIM_OPERACAO`;
    return this.entityManager.query(sql, parameters);
  }
}
