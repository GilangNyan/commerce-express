import { UserModel } from "../../../../domains/models/user/UserModel";
import { UserRepository } from "../../../../domains/repositories/user/UserRepository";
import { PaginatedResponse } from "../../../../shared/types/PaginatedResponse";
import appDataSource from "../../../configs/typeorm/TypeOrmModule";
import { User } from "../../entities/user/User";
import { UserMapper } from "../../mappers/user/UserMapper";

export class DatabaseUserRepository implements UserRepository {
  private userRepository = appDataSource.getRepository(User);

  constructor() {}

  async create(user: UserModel): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }

  async findAll(
    page: number,
    pageSize: number,
  ): Promise<PaginatedResponse<UserModel>> {
    const [result, total] = await this.userRepository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    const users = result.map((item) => UserMapper.toDomain(item));
    return new PaginatedResponse(users, total, page, pageSize);
  }

  async findById(id: string): Promise<UserModel> {
    const user = await this.userRepository.findOneByOrFail({ id });
    return UserMapper.toDomain(user);
  }

  async findByEmail(email: string): Promise<UserModel> {
    const user = await this.userRepository.findOneByOrFail({ email });
    return UserMapper.toDomain(user);
  }

  async findByUsername(username: string): Promise<UserModel> {
    const user = await this.userRepository.findOneByOrFail({ username });
    return UserMapper.toDomain(user);
  }

  async update(user: UserModel): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
