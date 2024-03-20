import { User } from "@/types/user";
import { UserRepository } from "./user-repository";

export default class UserService {
  constructor(private repository: UserRepository) {}

  async getAllUsers() {
    const users = await this.repository.getAllUsers();

    if (users.length === 0) {
      throw new Error("No users found");
    }

    return users;
  }

  createUser(user: any) {
    return this.repository.createUser(user);
  }
}
