import { Request, Response } from "express";
import httpStatus from "@/utils/status-codes";
import UserService from "./user-service";
import { validateUser } from "./utils/validateUser";

export default class UserController {
  constructor(private readonly userService: UserService) {}

  public async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.getAllUsers();

      res.status(httpStatus.OK).json(users);
    } catch (error: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }

  async getUserById(req: Request, res: Response) {}

  async createUser(req: Request, res: Response) {
    if (!validateUser(req.body)) {
      return res.status(httpStatus.BAD_REQUEST).send();
    }

    try {
      const user = await this.userService.createUser(req.body);

      res.status(httpStatus.CREATED).json({ message: "ok", user });
    } catch (error: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
    } catch (error) {}
  }

  async deleteUser(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
}
