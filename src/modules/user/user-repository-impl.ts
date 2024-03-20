import { User } from "@/types/user";
import { UserRepository } from "./user-repository";
import { queries } from "./utils/user-queries";
import Database from "@/db";
import { QueryResult } from "pg";

const db = new Database();

export default class UserRepositoryImpl implements UserRepository {
  async getAllUsers(): Promise<User[]> {
    await db.connect();

    const users = await db.query(queries.getAllUsers);

    db.close();
    return users.rows as any;
  }

  async createUser(user: User): Promise<any> {
    await db.connect();

    const { id, email, password } = user;

    const result = await db.query(queries.createUser, [id, email, password]);

    db.close();
    return result.rows[0];
  }
}
