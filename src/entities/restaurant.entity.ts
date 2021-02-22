import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class restaurant {
  @PrimaryGeneratedColumn('uuid')
  restaurantId: string;

  @Column()
  lat: string;

  @Column()
  long: string;

  @Column()
  name: string;
}