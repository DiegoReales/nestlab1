import { Applicant } from 'src/applicants/entities/applicant.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => Applicant, applicant => applicant.user)
  applicants: Applicant[]

  @OneToMany(() => Employee, employee => employee.user)
  employees: Employee[]
}
