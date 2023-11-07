import * as argon2 from "argon2";
import { IsEmail } from "class-validator";
import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IUser } from "../interfaces/user.interface";

@Entity("user")
export class UserEntity {
  constructor(props: IUser) {
    Object.assign(this, props);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Index("user_username")
  @Column()
  username: string;

  @Index("user_email")
  @Column()
  @IsEmail()
  email: string;

  @Column({ default: "" })
  bio: string;

  @Column({ default: "" })
  image: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }
}
