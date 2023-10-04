import { Game } from "../abstracts/Game";
import { GameFactory } from "../abstracts/GameFactory";
import { StrategyGame } from "./StrategyGame";

export class StrategyGameFactory extends GameFactory {
  createGame(game_name: string, game_id: string): Game {
    return new StrategyGame(game_name, game_id);
  }
}
