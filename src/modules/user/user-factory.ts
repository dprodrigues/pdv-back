import UserRepositoryImpl from "@/modules/user/user-repository-impl";
import UserController from "@/modules/user/user-controller";
import UserService from "@/modules/user/user-service";

export default function userFactory(): UserController {
  const userRepository = new UserRepositoryImpl();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  return userController;
}
