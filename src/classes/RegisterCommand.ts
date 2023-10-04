import { User } from "../abstracts/User";
import { Command } from "../interfaces/Command";

export class RegisterCommand implements Command {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  execute() {
    this.user.register();
  }
}
