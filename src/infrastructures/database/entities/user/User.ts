import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base/BaseEntity";

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true, type: 'varchar' })
  username!: string;

  @Column({ unique: true, type: 'varchar' })
  email!: string;

  @Column({ type: 'varchar' })
  password!: string;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;
}
