import { UserEntity } from "@/entities/User";

// controls/AuthControl.ts
export class AuthControl {
  public async authenticateUser(email: string, password: string) {
    const userEntity = new UserEntity();

    const foundUser = userEntity.findUserByCredential(email, password);
    return foundUser;
  }
}
