import { Game } from "../abstracts/Game";
import { GameFactory } from "../abstracts/GameFactory";
import { ActionGame } from "./ActionGame";

export class ActionGameFactory extends GameFactory {
  createGame(game_name: string, game_id: string): Game {
    return new ActionGame(game_name, game_id);
  }
}
