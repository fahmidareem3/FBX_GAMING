import { Game } from "../abstracts/Game";
export class StrategyGame extends Game {
  constructor(game_name: string, game_id: string) {
    super(game_name, game_id);
  }

  implement_game(): void {
    console.log("Implementing strategy game logic");
  }

  implement_cheat(): void {
    console.log("Activating cheat for strategy game");
  }
}
