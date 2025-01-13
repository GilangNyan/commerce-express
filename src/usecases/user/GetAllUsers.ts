import { UserModel } from "../../domains/models/user/UserModel";
import { UserRepository } from "../../domains/repositories/user/UserRepository";
import { PaginatedResponse } from "../../shared/types/PaginatedResponse";

interface Params extends PaginationParams {}

export class GetAllUsers {
  constructor(private userRepository: UserRepository) {}

  async execute(params: Params): Promise<PaginatedResponse<UserModel>> {
    const { page, pageSize } = params;
    return this.userRepository.findAll(page, pageSize);
  }
}
