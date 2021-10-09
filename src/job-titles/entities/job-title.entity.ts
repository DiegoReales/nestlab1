import { WorkRecord } from "src/work-records/entities/work-record.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class JobTitle {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => WorkRecord, wordRecord => wordRecord.jobTitle)
  workRecords: WorkRecord
}
