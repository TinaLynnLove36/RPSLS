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
      
       
    }
 
     }
    


class Human extends Player{
    constructor() {
        super();
    }
}

class ComputerPlayer extends Player{
    constructor() {
    super();
}
}

    


class Game {
    constructor() {
        this.displayRules();
        this.selectPlayer();

    }
    
    
    displayRules() {
        console.log("Each player will choose an option: Rock, Paper, Scissors, Lizard, or Spock.");
        console.log("Rock: crushes Lizard and Scissors.");
        console.log("Paper: covers rock, disproves Spock.");
        console.log("Scissors: cuts paper, decaptiates lizard.");
        console.log("Lizard: poisons Spock, eats Paper.");
        console.log("Spock: vaporizes Rock, smashes Scissors.");
        console.log("Challenge your friend or the computer. First to 3 points wins! Ready?");
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
    
   // this.gestures = ['Rock', 'Paper', 'Sissors', 'Lizard', 'Spock'.toLowerCase()];
     
      

   selectPlayer(){
    let select = prompt("Challenge another player or the computer. Enter 1 for computer or 2 for multiplayer");
    switch(select){
           case"1":
           this.playerOne = new Human();
           this.playerTwo = new ComputerPlayer();

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
       // this.winner = [];
    
       /*  choosePlayerNumber() {
            let input = console.log('Choose number of players. Enter 1 or 2');
            let inputResponse = prompt();
            if(inputResponse == '1'){
                this.playerOne = new Human();
                this.playerTwo = new AI();
                console.log("What is your name?");
                let playerOneName = prompt();
                this.playerOne = playerOneName;
                this.playerTwoName = 'Computer';
                game.computerPlay();
         }  else if (input == '2') {
                this.playerOne = new Human();
                this.playerTwo = new Human();           
                let playerOneName = prompt("What is player one's name?");
                let playerTwoName = prompt("What is player two's name?");
                this.playerOne = playerOneName;
                this.playerTwo = playerTwoName;   
                console.log("Okay " + playerOneName + " . You're going head-to-head with " + playerTwoName + "." );        
        }   else {
                game.choosePlayerNumber();
                }
 
    } 
 */
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

    runGame() {
    this.mainMenu();

    while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
        this.mainGame();
        if (this.playerOne.score === 3 || this.playerTwo.score === 3) {
            this.displayResults();
        }
    }
}
  
    computerPlay() {
     //   this.playerTwo = new Player('Computer');
        console.log("Okay " + this.playerOne + ". You're going head-to-head with the Computer.");
        let choice = this.gestures;
        for (let i = 0; i < choice.length; i++) {
        let computerChoice = choice[Math.floor(Math.random()*choice.length)];
        console.log("Enter rock, paper, scissors, or spock to begin.");
        let userSelect = prompt().toLowerCase();
        if (userSelect === computerChoice) {
            console.log("The computer also chose " + computerChoice + ": \nIt's a tie!");
        } else if (userSelect === 'rock') {
            if (computerChoice === 'paper') {
                console.log('Computer chose Paper. Paper covers Rock. You lose!');
                this.playerTwo.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else if (computerChoice === 'scissors') {
                console.log('Computer chose Scissors. Rock crushes Scissors. You win!');
                this.playerOne.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else if (computerChoice === 'lizard') {
                console.log('Computer chose Lizard. Rock crushes Lizard. You win!');
                this.playerOne.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else {
                console.log('Computer chose Spock. Spock vaporizes Rock. You lose!');
                this.playerTwo.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            }
        }  else if (userSelect === 'paper') {
            if (computerChoice === 'rock') {
                console.log('Computer chose Rock. Paper covers Rock. You win!');
                this.playerOne.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else if(computerChoice === 'scissors') {
                console.log('Computer chose Scissors. Scissors cut Paper. You lose!');
                this.playerTwo.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else if (computerChoice === 'lizard') {
                console.log('Computer chose Lizard. Lizard eats Paper. You lose!');
                this.playerTwo.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else {
                console.log('Computer chose Spock. Paper disproves Spock. You win!');
                this.playerOneName.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            }
        }   else if (userSelect === 'scissors') {
            if (computerChoice === 'rock') {
                console.log('Computer chose Rock. Rock crushes Scissors. You lose!');
                this.playerTwo.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else if (computerChoice === 'paper') {
                console.log('Computer chose Paper. Scissors cut Paper. You win!');
                this.playerOneName.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else if (computerChoice === 'lizard') {
                console.log('Computer chose Lizard. Scissors decapitates Lizard. You win!');
                this.playerOneName.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else {
                console.log('Computer chose Spock. Spock smashes Scissors. You lose!');
                this.playerTwo.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            }
        } else if (userSelect === 'lizard') {
            if (computerChoice === 'rock') {
                console.log('Computer chose Rock. Rock crushes Lizard. You lose!');
                this.playerTwo.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else if (computerChoice === 'scissors') {
                console.log('Computer chose Scissors. Scissors decapitates Lizard. You lose!');
                this.playerTwo.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else if ( computerChoice === 'paper') {
                console.log('Computer chose Paper. Lizard eats Paper. You win!');
                this.playerOneName.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else {
                console.log('Computer chose Spock. Lizard poisons Spock. You win!');
                this.playerOneName.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } 
        } else if (userSelect === 'spock') {
            if (computerChoice === 'rock') {
                console.log('Computer chose Rock. Spock vaporizes Rock. You win!');
                this.playerOneName.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else if (computerChoice === 'paper') {
                console.log('Computer chose Paper. Paper disproves Spock. You lose!');
                this.playerTwo.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else if (computerChoice === 'scissors') {
                console.log('Computer chose Scissors. Spock smashes Scissors. You win.');
                this.playerOne.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            } else {
                console.log('Computer chose Lizard. Lizard poisons Spock. You lose!');
                this.playerTwo.score++;
                console.log(this.playerOne + ": " + this.playerOne.score + " to " + this.playerTwo + ": " + this.playerTwo.score);
            }
        }  if (userSelect != choice[i]) {
            this.computerPlay();
        }

        } this.displayWinnerComputerPlay();
        
      
}
   //Scissors: cuts paper, decaptiates lizard.
//Paper: covers rock, disproves Spock.
//Rock: crushes lizard, crushes Scissors.
//Lizard: poisons Spock, eats Paper;
//Spock: vaporizes Rock, smashes Scissors

  


    displayWinnerComputerPlay() {
        if (this.playerOne.score === 3) {
            console.log("Congratulations " + this.playerOne + ". You win!")
        } else if (this.playerTwo.score === 3) {
            console.log("Ouch! That hurts. The Computer kicked butt... But there's always 2 out of 3. Yeah, let's go with that!");
            console.log('Enjoy your day... if you can!');
        }
    }

    quit() {
        console.log("Thanks for playing. Hope you had fun. Have a great Rock, Paper, Scissors, Lizard, Spock rest of the day!");
    }
}

class Multigame {
    constructor() {
        super();
    }

}
let game = new Game();
game.runGame();

