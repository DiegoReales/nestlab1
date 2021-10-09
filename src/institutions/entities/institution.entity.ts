import { EmployeeStudy } from "src/employee-studies/entities/employee-study.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Institution {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => EmployeeStudy, employeeStudies => employeeStudies.institution)
  employeeStudies: EmployeeStudy
}
