import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserGender {
  MAN = 'man',
  WOMAN = 'woman'
}

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

  @Column({ type: "integer", width: 2})
  entranceYear: Number;

  @Column({
    type: "enum",
    enum: UserGender
  })
  gender: UserGender;
}