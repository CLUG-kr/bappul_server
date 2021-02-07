import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userClassification: string;

  @Column()
  id: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  department: string;

  @Column({ type: "integer", width: 2})
  entranceYear: Number;

  @Column()
  gender: string;

  @Column()
  mailAddress: string;
}