import { DatabaseUserRepository } from "../../infrastructures/database/repositories/user/UserRepository";
import { GetAllUsers } from "../../usecases/user/GetAllUsers";
import { DIContainer } from "../DIContainer";

class UserDependencies {
  static register() {
    DIContainer.register("UserRepository", new DatabaseUserRepository());
    DIContainer.register("GetAllUsersUseCase", new GetAllUsers(DIContainer.resolve("UserRepository")));
  }
}

export { UserDependencies }