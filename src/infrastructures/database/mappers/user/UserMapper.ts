import { UserModel } from "../../../../domains/models/user/UserModel";
import { User } from "../../entities/user/User";

export class UserMapper {
  static toDomain(user: User): UserModel {
    return new UserModel(
      user.id,
      user.createdAt,
      user.updatedAt,
      user.username,
      user.email,
      user.password,
      user.isActive
    )
  }

  static toEntity(userModel: UserModel): User {
    const user = new User()
    user.id = userModel.id
    user.username = userModel.username
    user.email = userModel.email
    user.password = userModel.password
    user.isActive = userModel.isActive
    return user
  }
}