import { Auth } from "./classes/Auth";

import { TeamScore } from "./classes/TeamScore";
import { SingleScore } from "./classes/SingleScore";
import { GameFactory } from "./abstracts/GameFactory";
import { Game } from "./abstracts/Game";
import { ActionGameFactory } from "./classes/ActionGameFactory";
import { RacingGameFactory } from "./classes/RacingGameFactory";
import { NotificationService } from "./classes/NotificationServer";
import { RegisterCommand } from "./classes/RegisterCommand";
import { UserActionsInvoker } from "./classes/UserActionsInvoker";
import { LoginCommand } from "./classes/LoginCommand";
import { LogoutCommand } from "./classes/LogoutCommand";
import { DatabaseConnection } from "./classes/DatabaseConnection";

// 1. User Registration
let gamer = new Auth("Rumel", "password123");
let registerCommand = new RegisterCommand(gamer);
let invoker = new UserActionsInvoker();
invoker.setCommand(registerCommand);
invoker.executeCommand(); // This will register the user

// 2. Saving User Data to the database

let db = DatabaseConnection.getInstance();
db.query(
  `INSERT INTO users (name, password) VALUES ('${gamer.user_name}', '********')`
);

// 3. User Login
let loginCommand = new LoginCommand(gamer);
invoker.setCommand(loginCommand);
invoker.executeCommand(); // This will login the user

//4. Attach the Notification Service to the user
let notificationService = new NotificationService();
gamer.attach(notificationService);

// 5. Playing an action game
let actionGameFactory: GameFactory = new ActionGameFactory();
let superFighters: Game = actionGameFactory.createGame("Super Fighters", "001");
superFighters.implement_game();
superFighters.implement_cheat();

// 6. Adding scores after playing the action game
let teamScore = new TeamScore([100, 95, 110], 20);
superFighters.addScore(teamScore);

// 7. Playing a racing game
let racingGameFactory: GameFactory = new RacingGameFactory();
let speedRacers: Game = racingGameFactory.createGame("Speed Racers", "002");
speedRacers.implement_game();

// 8. Adding scores after playing the racing game
let singleScore = new SingleScore(10, 5);
speedRacers.addScore(singleScore);

// 9. Adding games to user's game array
gamer.addGame(superFighters);

gamer.addGame(speedRacers);

// 10. Getting game details and scores for action game
console.log(superFighters.getGameDetails());
console.log("Scores for Super Fighters:", superFighters.getScores());

//11. Status updated after scoring
gamer.update_status();
// 12. Getting game details and scores for racing game
console.log(speedRacers.getGameDetails());
console.log("Scores for Speed Racers:", speedRacers.getScores());

//13. Status updated after scoring
gamer.update_status();

// 14. User Logout
let logoutCommand = new LogoutCommand(gamer);
invoker.setCommand(logoutCommand);
invoker.executeCommand(); // This will logout the user
