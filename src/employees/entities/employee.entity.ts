import { Competence } from "src/competences/entities/competence.entity";
import { EmployeeStudy } from "src/employee-studies/entities/employee-study.entity";
import { User } from "src/users/entities/user.entity";
import { WorkRecord } from "src/work-records/entities/work-record.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.employees)
  user: User;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @ManyToMany(() => Competence, compentence => compentence.employees)
  @JoinTable({name: 'employee_competences'})
  competences: Competence[];

  @OneToMany(() => WorkRecord, wordRecord => wordRecord.employee)
  workRecords: WorkRecord

  @OneToMany(() => EmployeeStudy, studies => studies.employee)
  studies: EmployeeStudy
}
