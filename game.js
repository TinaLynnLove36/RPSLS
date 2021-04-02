"use strict";

const prompt = require('prompt-sync')();

//Scissors: cuts paper, decaptiates lizard.
//Paper: covers rock, disproves Spock.
//Rock: crushes lizard, crushes Scissors.
//Lizard: poisons Spock, eats Paper;
//Spock: vaporizes Rock, smashes Scissors


class Game {
    constructor() {
  //  this.playerOne = require("./player");
    //this.playerTwo = require("./player");
    //this.gestures = ['1', '2', '3', '4', '5']
}

runGame() {
    this.selectPlayer();


    while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
        this.computerPlay();
        if (this.playerOne.score === 3 || this.playerTwo.score === 3) {
            this.displayResults();
        }
        }
    }

    

selectPlayer(){
    console.log("Challenge another player or the computer. Enter 1 for computer or 2 for multiplayer.");
    let select = prompt();
    switch(select){
           case"1":
            this.playerOne = new require("./player").Human();
     
            break;
            case"2":
           this.playerOne = new Human();
           this.playerTwo = new Human();
            break;
            default:
            game.selectPlayer();
           break;


    }
}


    computerPlay() { 
        this.playerOne = new Human();
        console.log("Okay, " + this.playerOne.name + ". Your challenger is " + this.compPlayer.name + ". Good luck!");
        console.log("Enter a gesture: \n Rock = 1\n Paper = 2\n Scissor = 3\n Lizard = 4\n Spock = 5");
        let userInput = prompt();
        userInput = parseInt(userInput);
        let compChoice = this.gestures;
        for (let i = 0; i < compChoice.length; i++) {
        let computerChoice = parseInt(compChoice[Math.floor(Math.random()*this.gestures.length)]);
                if (userInput === computerChoice) {
                    console.log(this.compPlayer.name + " chose that as well. Thinking a like I see. It's a tie!");
                } else if (userInput === '1') {
                    if (computerChoice === '2') {
                        console.log(this.compPlayer.name + " chose Paper. Paper covers Rock. You lose!");
                        this.compPlayer.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else if (computerChoice === '3') {
                        console.log(this.compPlayer.name + " chose Scissors. Rock crushes Scissors. You win!");
                        this.playerOne.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else if (computerChoice === '4') {
                        console.log(this.compPlayer.name + " chose Lizard. Rock crushes Lizard. You win!");
                        this.playerOne.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else {
                        console.log(this.compPlayer.name + " chose Spock. Spock vaporizes Rock. You lose!");
                        this.compPlayer.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    }
                }  else if (userInput === '2') {
                    if (computerChoice === '1') {
                        console.log(this.compPlayer.name + " chose Rock. Paper covers Rock. You win!");
                        this.playerOne.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else if(computerChoice === '3') {
                        console.log(this.compPlayer.name + " chose Scissors. Scissors cut Paper. You lose!");
                        this.compPlayer.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else if (computerChoice === '4') {
                        console.log(this.compPlayer.name + " chose Lizard. Lizard eats Paper. You lose!");
                        this.compPlayer.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else {
                        console.log(this.compPlayer.name + " chose Spock. Paper disproves Spock. You win!");
                        this.playerOne.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    }
                }   else if (userInput === '3') {
                    if (computerChoice === '1') {
                        console.log(this.compPlayer.name + " chose Rock. Rock crushes Scissors. You lose!");
                        this.compPlayer.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else if (computerChoice === '2') {
                        console.log(this.compPlayer.name + " chose Paper. Scissors cut Paper. You win!");
                        this.playerOne.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else if (computerChoice === '4') {
                        console.log(this.compPlayer.name + " chose Lizard. Scissors decapitates Lizard. You win!");
                        this.playerOneName.score++;
                        console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else {
                        console.log(this.compPlayer.name + " chose Spock. Spock smashes Scissors. You lose!");
                        this.playerTwo.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    }
                } else if (userInput === '4') {
                    if (computerChoice === '1') {
                        console.log(this.compPlayer.name + " chose Rock. Rock crushes Lizard. You lose!");
                        this.compPlayer.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else if (computerChoice === '3') {
                        console.log(this.compPlayer.name + " chose Scissors. Scissors decapitates Lizard. You lose!");
                        this.compPlayer.score++;
                        console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else if ( computerChoice === '2') {
                        console.log(this.compPlayer.name + " chose Paper. Lizard eats Paper. You win!");
                        this.playerOne.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else {
                        console.log(this.compPlayer.name + " chose Spock. Lizard poisons Spock. You win!");
                        this.playerOne.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } 
                } else if (userInput === '5') {
                    if (computerChoice === '1') {
                        console.log(this.compPlayer.name + " chose Rock. Spock vaporizes Rock. You win!");
                        this.playerOne.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else if (computerChoice === '2') {
                        console.log(this.compPlayer.name + " chose Paper. Paper disproves Spock. You lose!");
                        this.compPlayer.score++;
                        console.log(this.playerOne.name + ": " + this.playerOne.score + " to " + this.compPlayer.name + ": " + this.compPlayer.score);
                    } else if (computerChoice === 'scissors') {
                        console.log('Computer chose Scissors. Spock smashes Scissors. You win.');
                        this.playerOne.score++;
                        console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
                    } else {
                        console.log('Computer chose Lizard. Lizard poisons Spock. You lose!');
                        this.playerTwo.score++;
                        console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
                    }
                }   if (userInput > 5 || userInput < 1) {
                    console.log('Please enter a number from 1 - 5');
                    this.computerPlay();
                } 
                }
        
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

module.exports.game = Game;
