import { Request, Response } from "express";
import { DIContainer } from "../../di/DIContainer";
import { GetAllUsers } from "../../usecases/user/GetAllUsers";

export class UserController {
  private getAllUsers

  constructor() {
    this.getAllUsers = DIContainer.resolve<GetAllUsers>("GetAllUsersUseCase");
    this.getAll = this.getAll.bind(this)
  }

  async getAll (req: Request, res: Response) {
    const { page, pageSize } = req.query;
    try {
      const users = await this.getAllUsers.execute({
        page: parseInt(page as string),
        pageSize: parseInt(pageSize as string)
      });

      res.json(users);
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}