import { BaseModel } from "../base/BaseModel";

export class UserModel extends BaseModel {
  username!: string;
  email!: string;
  password!: string;
  isActive!: boolean;

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    username: string,
    email: string,
    password: string,
    isActive: boolean,
  ) {
    super(id, createdAt, updatedAt);
    this.username = username;
    this.email = email;
    this.password = password;
    this.isActive = isActive;
  }
}
