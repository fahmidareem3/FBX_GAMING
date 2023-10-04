import { User } from "../abstracts/User";
import { Observer } from "../interfaces/Observer";

export class NotificationService implements Observer {
  update(user: User): void {
    console.log(`Sending notifications to user: ${user.user_name}`);
  }
}
