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

// 1. User Registration
let gamer = new Auth("Rumel", "password123");
let registerCommand = new RegisterCommand(gamer);
let invoker = new UserActionsInvoker();
invoker.setCommand(registerCommand);
invoker.executeCommand(); // This will register the user

// 2. User Login
let loginCommand = new LoginCommand(gamer);
invoker.setCommand(loginCommand);
invoker.executeCommand(); // This will login the user

// Attach the Notification Service to the user
let notificationService = new NotificationService();
gamer.attach(notificationService);

// 3. Playing an action game
let actionGameFactory: GameFactory = new ActionGameFactory();
let superFighters: Game = actionGameFactory.createGame("Super Fighters", "001");
superFighters.implement_game();
superFighters.implement_cheat();

// 4. Adding scores after playing the action game
let teamScore = new TeamScore([100, 95, 110], 20);
superFighters.addScore(teamScore);

// 5. Playing a racing game
let racingGameFactory: GameFactory = new RacingGameFactory();
let speedRacers: Game = racingGameFactory.createGame("Speed Racers", "002");
speedRacers.implement_game();

// 6. Adding scores after playing the racing game
let singleScore = new SingleScore(10, 5);
speedRacers.addScore(singleScore);

// 7. Adding games to user's game array
gamer.addGame(superFighters);

gamer.addGame(speedRacers);

// 8. Getting game details and scores for action game
console.log(superFighters.getGameDetails());
console.log("Scores for Super Fighters:", superFighters.getScores());
//Status updated after scoring
gamer.update_status();
// 9. Getting game details and scores for racing game
console.log(speedRacers.getGameDetails());
console.log("Scores for Speed Racers:", speedRacers.getScores());
//Status updated after scoring
gamer.update_status();

// 10. User Logout
let logoutCommand = new LogoutCommand(gamer);
invoker.setCommand(logoutCommand);
invoker.executeCommand(); // This will logout the user
