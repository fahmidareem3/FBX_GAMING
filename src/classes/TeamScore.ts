import { Scorable } from '../interfaces/Scorable';

export class TeamScore implements Scorable {
  private teamAchievements: number[];
  private totalTimeTaken: number;

  constructor(teamAchievements: number[], totalTimeTaken: number) {
    this.teamAchievements = teamAchievements;  // Array of achievements for each team member
    this.totalTimeTaken = totalTimeTaken;      // Total time taken by the team
  }

  getScore(): number {
    const achievementsScore = this.teamAchievements.reduce((acc, curr) => acc + curr, 0);
    return achievementsScore - this.totalTimeTaken * 0.2; // The penalty for time taken is less in a team context
  }
}
