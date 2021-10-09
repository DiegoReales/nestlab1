import { Employee } from "src/employees/entities/employee.entity";
import { JobTitle } from "src/job-titles/entities/job-title.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class WorkRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, employee => employee.workRecords)
  employee: Employee;

  @ManyToOne(() => JobTitle, jobTitle => jobTitle.workRecords)
  jobTitle: JobTitle;

  @Column()
  beginDate: Date;

  @Column()
  endDate: Date;

  @Column()
  companyName: string;

  @Column()
  companyPhone: string;

  @Column()
  bossName: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
