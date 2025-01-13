import { PaginatedResponse } from "../../../shared/types/PaginatedResponse";
import { UserModel } from "../../models/user/UserModel";

export interface UserRepository {
  create(user: UserModel): Promise<UserModel>;
  findAll(page: number, pageSize: number): Promise<PaginatedResponse<UserModel>>;
  findById(id: string): Promise<UserModel>;
  findByEmail(email: string): Promise<UserModel>;
  findByUsername(username: string): Promise<UserModel>;
  update(user: UserModel): Promise<UserModel>;
  delete(id: string): Promise<void>;
}
