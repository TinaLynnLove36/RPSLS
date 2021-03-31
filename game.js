"use strict";

const prompt = require('prompt-sync')();

//Scissors: cuts paper, decaptiates lizard.
//Paper: covers rock, disproves Spock.
//Rock: crushes lizard, crushes Scissors.
//Lizard: poisons Spock, eats Paper;
//Spock: vaporizes Rock, smashes Scissors

class Player {
    constructor(name, playerType) {
        this.name = name;
        this.score = 0;
        this.gestures = ['rock', 'paper', 'sissors', 'lizard', 'spock'];
        this.playerType = playerType;
        this.turn = "";
       

    }
    choosePlayerNumber() {
            let input = prompt('Choose number of players. Enter 1 or 2');
            if(input == '1'){
                        this.playerOne = new Human();
                        this.playerTwo = new AI();
                        let playerOneName = prompt("What is your name?");
                        this.playerOne.name = playerOneName;
                        this.playerTwo.name = 'Computer';
                        game.computerPlay();
                    } else if (input == '2') {
                        this.playerOne = new Human();
                        this.playerTwo = new Human();           
                        let playerOneName = prompt("What is player one's name?");
                        let playerTwoName = prompt("What is player two's name?");
                        this.playerOne.name = playerOneName;
                        this.playerTwo.name = playerTwoName;   
                        console.log("Okay " + playerOneName + " . You're going head-to-head with " + playerTwoName + "." );        
                    } else {
                        console.log('Pleae enter 1 or 2 to select number of players.');
                    }
     //playTurn() {
      //   return this.turn = console.log('')
    // }   
                
                
                
                
                
                
                
                }
    }


class Human extends Player{
    constructor() {
        super();
    }
}

class AI extends Player{
    constructor();
    super();
}


    


class Game {
    constructor() {
        player.choosePlayerNumber.playerOneName = new Player(playerOneName);
        player.choosePlayerNumber.playerTwoName = new Player(playerTwoName);

        this.winner = [];

    } 

    mainMenu() {
        console.log("Welcome to Rock, Paper, Scissor, Lizard, Spock!\n\nWould you like to play best of three, see the rules, or quit?\n\nType the option you want: 'play' 'rules' or 'quit'").toLowerCase();
        let choice = prompt().toLowerCase();
        switch(choice) {
            case 'play':
                return player.choosePlayerNumber();
            case 'rules':
                return this.displayRules();
            case 'quit':
                return this.quit();
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
        console.log("Okay " + this.playerOneName + " " + ". You're going head-to-head with the Computer.");
        console.log("Enter 'r' for Rock, 'p' for Paper, 'sc' for Scissors, 'l' for Lizard or 'sp' for Spock.");
        let userSelect = prompt();
        this.computerChoice();
        
    }

    computerChoice() {
        
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
        if (answer = 'yes') {
            return player.choosePlayerNumber();
        } else {
            return this.mainMenu();
        }

    }

    quit() {
        console.log("Thanks for playing. Hope you had fun. Have a great Rock, Paper, Scissors, Lizard, Spock rest of the day!");
    }
}




