"use strict";

const prompt = require('prompt-sync')();

//Scissors: cuts paper, decaptiates lizard.
//Paper: covers rock, disproves Spock.
//Rock: crushes lizard, crushes Scissors.
//Lizard: poisons Spock, eats Paper;
//Spock: vaporizes Rock, smashes Scissors

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.gestures = ['Rock', 'Paper', 'Sissors', 'Lizard', 'Spock'];
        this.turn = "";
       
    }
 
     }
    


class Human extends Player{
    constructor() {
        super();
    }
}

class AI extends Player{
    constructor() {
    super();
}
}

    


class Game {
    constructor() {
        this.playerOne = new Player(this.playerOneName);
        this.playerTwo = new Player(this.playerTwoName);
      

        this.winner = [];
    }
        choosePlayerNumber() {
            let input = console.log('Choose number of players. Enter 1 or 2');
            let inputResponse = prompt();
            if(inputResponse == '1'){
                this.playerOne = new Human();
                this.playerTwo = new AI();
                console.log("What is your name?");
                let playerOneName = prompt();
                this.playerOne = playerOneName;
                this.playerTwo = 'Computer';
                game.computerPlay();
         }  else if (input == '2') {
                this.playerOne = new Human();
                this.playerTwo = new Human();           
                let playerOneName = prompt("What is player one's name?");
                let playerTwoName = prompt("What is player two's name?");
                this.playerOne.name = playerOneName;
                this.playerTwo.name = playerTwoName;   
                console.log("Okay " + playerOneName + " . You're going head-to-head with " + playerTwoName + "." );        
        }   else {
                console.log('Pleae enter 1 or 2 to select number of players.');
                }
 
    } 

    mainMenu() {
        console.log("Welcome to Rock, Paper, Scissor, Lizard, Spock!\n\nWould you like to play best of three, see the rules, or quit?\n\nType the option you want: 'play' 'rules' or 'quit.'");
        let choice = prompt().toLowerCase();
        switch(choice) {
            case 'play':
                return game.choosePlayerNumber();
            case 'rules':
                return this.displayRules();
            case 'quit':
                return this.quit();
            default:
                return this.mainMenu();
        }  
    }

    runGame(player, game) {
    this.mainMenu();

    if (this.playerTwoName === 'Computer') {
        this.computerPlay();
    } else {
        this.twoPersonPlay();
    }

   
    }
  
    computerPlay() {
        let choice = this.playerOne.player.gestures;
        for (let i = 0; i < choice.length; i++);
        let computerChoice = choice[Math.floor(Math.random()*choice.length)];
        console.log("Okay " + this.playerOneName + ". You're going head-to-head with the Computer.");
        console.log("Enter 'r' for Rock, 'p' for Paper, 'sc' for Scissors, 'l' for Lizard or 'sp' for Spock.");
        let userSelect = prompt();
        if (userSelect === computerChoice) {
            console.log("It's a tie");
        }
        
    }

   

    twoPersonPlay() {

    }

    displayRules() {
        console.log("Each player will choose an option: Rock, Paper, Scissors, Lizard, or Spock.");
        console.log("Rock: crushes Lizard and Scissors.");
        console.log("Paper: covers rock, disproves Spock.");
        console.log("Scissors: cuts paper, decaptiates lizard.");
        console.log("Lizard: poisons Spock, eats Paper.");
        console.log("Spock: vaporizes Rock, smashes Scissors.");
        console.log("Challenge your friend or the computer. Ready?");
        let answer = prompt();
        if (answer === 'yes') {
            return game.choosePlayerNumber();
        } if (answer === 'no') {
            return this.mainMenu();
        } else {
            console.log("Please enter yes to play or no to return to Main Menu.");
            let answerSecond = prompt();
            if (answerSecond = 'yes') {
                return game.choosePlayerNumber();
            } if (answerSecond = 'no') {
                return this.mainMenu();
            }
        }

    }

    quit() {
        console.log("Thanks for playing. Hope you had fun. Have a great Rock, Paper, Scissors, Lizard, Spock rest of the day!");
    }
}

let game = new Game();
game.runGame();

