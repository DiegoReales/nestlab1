import { Employee } from "src/employees/entities/employee.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Competence {
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

  @ManyToMany(() => Competence, competence => competence.employees)
  employees: Employee
}

@Entity('employee_competences')
export class EmployeeCompetence {
  @PrimaryColumn()
  employeeId: number

  @PrimaryColumn()
  competenceId: number

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
