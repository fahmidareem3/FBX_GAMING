import { Cheatable } from "../interfaces/Cheatable";
import { Game } from "../abstracts/Game";

export class ActionGame extends Game implements Cheatable {
    constructor(game_name: string, game_id: string) {
        super(game_name, game_id);
    }

    implement_game(): void {
        console.log("Implementing action game logic");
    }

    implement_cheat(): void {
        console.log("Activating cheat for action game");
    }
}