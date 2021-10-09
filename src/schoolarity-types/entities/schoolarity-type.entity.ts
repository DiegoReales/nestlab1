import { EmployeeStudy } from "src/employee-studies/entities/employee-study.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class SchoolarityType {
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

  @OneToMany(() => EmployeeStudy, employeeStudies => employeeStudies.schoolarityType)
  employeeStudies: EmployeeStudy
}
