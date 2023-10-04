import { CloudPlatform } from "../interfaces/CloudPlatform";
import { Game } from "./Game";
import { Observer } from "../interfaces/Observer";
export abstract class User implements CloudPlatform {
  user_name: string;
  password: string;
  game_name: Game[]; // An array of Game instances

  constructor(user_name: string, password: string) {
    this.user_name = user_name;
    this.password = password;
    this.game_name = [];
  }

  private observers: Observer[] = [];

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Observer is already attached.");
    }

    console.log("Attached an observer.");
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Detached an observer.");
  }

  notify(): void {
    console.log("Notifying observers...");
    for (let observer of this.observers) {
      observer.update(this);
    }
  }

  update_status(): void {
    console.log(`Updating status for user: ${this.user_name}`);
    this.notify(); // Notify all observers after updating the status
  }

  // Add a game to the user's game array
  addGame(game: Game): void {
    this.game_name.push(game);
  }

  // Abstract methods for the User class
  abstract login(): void;
  abstract logout(): void;
  abstract register(): void;
}
