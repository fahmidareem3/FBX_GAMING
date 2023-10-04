import { Game } from "./Game";

export abstract class GameFactory {
  abstract createGame(game_name: string, game_id: string): Game;
}
