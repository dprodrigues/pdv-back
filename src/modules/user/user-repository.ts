import { User } from "@/types/user";
import { QueryResult } from "pg";

export interface UserRepository {
  getAllUsers(): Promise<User[]>;
  createUser(user: any): Promise<QueryResult<User>>;
}
