import { User } from "../abstracts/User";

export interface Observer {
  update(user: User): void;
}
