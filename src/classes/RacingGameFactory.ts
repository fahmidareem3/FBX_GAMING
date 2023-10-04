import { Game } from "../abstracts/Game";
import { GameFactory } from "../abstracts/GameFactory";
import { RacingGame } from "./RacingGame";

export class RacingGameFactory extends GameFactory {
  createGame(game_name: string, game_id: string): Game {
    return new RacingGame(game_name, game_id);
  }
}
