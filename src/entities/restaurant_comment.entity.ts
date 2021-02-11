import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class restaurant_comment {
  @CreateDateColumn()
  createdDate: string;

  @PrimaryGeneratedColumn('uuid') 
  commentId: string;  

  @Column()
  restaurantId: string;

  @Column()
  userCode: string;

  @Column({type: 'longtext'})
  commentContent: string;

  @Column({type: 'integer'})
  rating: Number;
}