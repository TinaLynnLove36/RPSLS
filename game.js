"use strict";

const prompt = require('prompt-sync')();

//Scissors: cuts paper, decaptiates lizard.
//Paper: covers rock, disproves Spock.
//Rock: crushes lizard, crushes Scissors.
//Lizard: poisons Spock, eats Paper;
//Spock: vaporizes Rock, smashes Scissors

class Player {
    constructor() {
    
        this.score = 0;
        
        }
    
    }

    class Human extends Player {
        constructor(name) {
        super(name);
        this.name = prompt("Enter player's name.   ");
        this.gesture = ['1', '2', '3', '4', '5']; 

   // } choosePlayerName() {
   //     this.name = prompt();
}
}
    class Computer extends Player {
        constructor(name) {
        super(name);
        this.name = "Computer";
       
    }
}




class Game {
    constructor() {
  //  this.playerOne = require("./player");
   // this.playerTwo = require("./player");
    //this.gestures = ['1', '2', '3', '4', '5']
}

runGame() {
    this.displayRules();
   // this.menu();
   this.selectPlayer();
    this.pointsToWin = 3;
    do {
        this.playerOne.chooseGesture();
        this.playerTwo.chooseGesture();
        this.determineRoundWinner();
     //   theGame.announceRoundWinner();
      } while (this.playerOne.score <= this.pointsToWin || this.playerTwo.score <= this.pointsToWin); 
      theGame.determineGameWinner();
      theGame.announceGameWinner();
    }


selectPlayer(){
    console.log("Challenge another player, the computer. Or just watch the computer battle.\nEnter 1 for computer, 2 for multiplayer, or 3 for computer action only.");
    let select = prompt();
    switch(select){
           case"1":
           this.playerOne = new Human;
            this.playerTwo = new Computer();
          //  this.playerToComp();
            break;
            case"2":
           this.playerOne = new Human();
           this.playerTwo = new Human();
         //  this.playerToComp();
            break;
            case"3":
            this.playerOne = new Computer();
            this.playerTwo = new Computer();
          //  this.playerToComp;
            default:
            this.selectPlayer();
           break;


    }
}

displayRules() {
console.log("Welcome to Rock, Paper, Scissor, Lizard, Spock!\nEach player will choose an option: Rock, Paper, Scissors, Lizard, or Spock.\nRock: beats Lizard and Scissors. Paper: beats rock and Spock.\nScissors: beats paper and Lizard. Lizard: beats Spock and Paper.\nSpock: beats Rock and Scissors. First to 3 points wins!");

}

    playerToComp() { 
        console.log("Okay, " + this.playerOne.name + ". Your challenger is " + this.playerTwo.name + ". Good luck!");
        console.log("Enter a gesture:\nRock = 1\nPaper = 2\nScissor = 3\nLizard = 4\nSpock = 5");
        let userInput = prompt();
        this.playerOne.gesture = parseInt(userInput);
        for (let i = 0; i < this.playerTwo.gesture.length; i++) {
        this.playerTwo.gesture = parseInt(this.playerTwo.gesture[Math.floor(Math.random()*this.playerTwo.gesture.length)]);
        }
    }

   
                
                
              
         
                quit() {
                    console.log("Thanks for playing. Hope you had fun. Have a great Rock, Paper, Scissors, Lizard, Spock rest of the day!");
                }
                
        

displayWinnerComputerPlay() {
    if (this.playerOne.score === 3) {
        console.log("Congratulations " + this.playerOne + ". You win!")
    } else if (this.playerTwo.score === 3) {
        console.log("Ouch! That hurts. The Computer kicked butt... But there's always 2 out of 3. Yeah, let's go with that!");
        console.log('Enjoy your day... if you can!');
    }
}
}
let game = new Game();
game.runGame();


//module.exports.selectPlayer = Game(selectPlayer());
