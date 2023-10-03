import { CloudPlatform } from '../interfaces/CloudPlatform';
import { Game } from './Game';

export abstract class User implements CloudPlatform {
    user_name: string;
    password: string;
    game_name: Game[]; // An array of Game instances

    constructor(user_name: string, password: string) {
        this.user_name = user_name;
        this.password = password;
        this.game_name = [];
    }

    // Implemented method from CloudPlatform interface
    update_status(): void {
        console.log(`Updating status for user: ${this.user_name}`);
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
