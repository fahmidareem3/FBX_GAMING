import * as readline from 'readline';

import { SingleScore } from './classes/SingleScore';
import { ActionGame } from './classes/ActionGame';
import { TeamScore } from './classes/TeamScore';
import { RacingGame } from './classes/RacingGame';

// Assuming the above methods have been added to the Game class and it's correctly imported
let myActionGame = new ActionGame("Super Fighters", "001");
let myRacingGame = new RacingGame("Need for Speed","002");
let teamAchievements = [10, 15, 20];
let totalTimeTaken = 15;
let teamScore = new TeamScore(teamAchievements, totalTimeTaken);
let singleScore = new SingleScore(10, 5);  // Example of a SingleScore instance
myActionGame.addScore(teamScore);
myRacingGame.addScore(singleScore)

console.log(myActionGame.getGameDetails());  // This will print the game name and ID
console.log(`Scores: ${myActionGame.getScores().join(", ")}`);  // This will print the scores

console.log(myRacingGame.getGameDetails());  // This will print the game name and ID
console.log(`Scores: ${myRacingGame.getScores().join(", ")}`);  // This will print the scores
