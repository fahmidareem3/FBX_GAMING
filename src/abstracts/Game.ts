import { Scorable } from '../interfaces/Scorable';
export abstract class Game {
    game_name: string;
    game_id: string;
    scores: Scorable[];
    
  
    constructor(game_name: string, game_id: string) {
      this.game_name = game_name;
      this.game_id = game_id;
      this.scores = [];
    }

    addScore(score: Scorable): void {
        this.scores.push(score);
      }

    getGameDetails(): string {
        return `Game: ${this.game_name}, ID: ${this.game_id}`;
    }
    
    getScores(): string[] {
        return this.scores.map(score => score.getScore().toString());
    }
  
    abstract implement_game(): void;
  }