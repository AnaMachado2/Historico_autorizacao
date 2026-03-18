import { Entity, PrimaryColumn } from 'typeorm';

@Entity('DUAL')
export class HistoricoEntity {
  @PrimaryColumn()
  id: string;
}
