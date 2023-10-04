import { User } from "../abstracts/User";
import { Command } from "../interfaces/Command";
export class LogoutCommand implements Command {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  execute() {
    this.user.logout();
  }

  undo() {
    this.user.login();
  }
}
