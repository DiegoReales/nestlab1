import { Employee } from "src/employees/entities/employee.entity";
import { Institution } from "src/institutions/entities/institution.entity";
import { Profession } from "src/professions/entities/profession.entity";
import { SchoolarityType } from "src/schoolarity-types/entities/schoolarity-type.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('employee_studies')
export class EmployeeStudy {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, employee => employee.studies)
  employee: Employee;

  @ManyToOne(() => SchoolarityType, schoolarityType => schoolarityType.employeeStudies)
  schoolarityType: SchoolarityType;

  @ManyToOne(() => Institution, institution => institution.employeeStudies)
  institution: Institution;

  @ManyToOne(() => Profession, profession => profession.employeeStudies)
  profession: Profession;

  @Column()
  year: string;

  @Column()
  ended: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
