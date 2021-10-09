import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.applicants)
  user: User;

  @Column()
  name: string;

  @Column()
  lastname: string;
}
