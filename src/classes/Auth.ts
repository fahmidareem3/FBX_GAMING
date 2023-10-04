import { User } from "../abstracts/User";

export class Auth extends User {
  login(): void {
    console.log(`${this.user_name} has logged in.`);
  }

  logout(): void {
    console.log(`${this.user_name} has logged out.`);
  }

  register(): void {
    console.log(`${this.user_name} has registered.`);
  }
}
