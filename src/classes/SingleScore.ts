import { Scorable } from "../interfaces/Scorable";

export class SingleScore implements Scorable {
  private achievements: number;
  private timeTaken: number;

  constructor(achievements: number, timeTaken: number) {
    this.achievements = achievements; // For instance, the number of achievements or tasks completed by the player
    this.timeTaken = timeTaken; // Amount of time taken to complete the game or reach a certain point
  }

  getScore(): number {
    return this.achievements - this.timeTaken * 0.5; // As an example, each achievement adds a point while time taken deducts points
  }
}
