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
        this.gesture = ['r', 'p', 's', 'l', 'k']; 
        
        }
    
    }

    class Human extends Player {
        constructor(name) {
        super(name);
        this.name = prompt("Enter player's name.   ");
       

    } chooseGesture() {
       console.log("Enter a gesture:\nRock = r\nPaper = p\nScissor = s\nLizard = l\nSpock = k");
        this.gesture = prompt();
            if (!this.gesture || /^('r'|'p'|'s'|'l'|'k')$/.test(this.gesture)) {
            this.chooseGesture();
        }
      
    }
}
    class Computer extends Player {
        constructor(name) {
        super(name);
        this.name = "Computer";
   
       
    } chooseGesture() {
        this.gesture = this.gesture[Math.floor(Math.random()*this.gesture.length)];
   
    }
}



class Game {
    constructor() {

}

runGame() {
    this.displayRules();
    this.selectPlayer();
    this.meetChallenger();
    this.scoreToWin = 3;
    do {
        this.playerOne.chooseGesture();
        this.playerTwo.chooseGesture();
        this.game();
      } while (this.playerOne.score < this.scoreToWin && this.playerTwo.score < this.scoreToWin); 
      this.announceGameWinner();
      this.anotherGameChoice();
    }


selectPlayer(){
    console.log("Challenge another player, the computer. Or just watch the computer battle.\nEnter 1 for computer, 2 for multiplayer, or 3 for computer action only.");
    let select = prompt();
    switch(select){
           case"1":
           this.playerOne = new Human;
            this.playerTwo = new Computer();
            break;
            case"2":
            this.playerOne = new Human();
            this.playerTwo = new Human();
            break;
            case"3":
            this.playerOne = new Computer();
            this.playerTwo = new Computer();
            break;
            default:
            this.selectPlayer();
             break;


    }
}

displayRules() {
console.log("Welcome to Rock, Paper, Scissor, Lizard, Spock!\nEach player will choose an option: Rock, Paper, Scissors, Lizard, or Spock.\nRock: beats Lizard and Scissors. Paper: beats rock and Spock.\nScissors: beats paper and Lizard. Lizard: beats Spock and Paper.\nSpock: beats Rock and Scissors. First to 3 points wins!");

}
meetChallenger() {
    console.log("Okay, " + this.playerOne.name + ". Your challenger is " + this.playerTwo.name + ". Good luck!");
}


    game() {
     //   this.playerOne.chooseGesture();
      //  this.playerTwo.chooseGesture();
        switch (this.playerOne.gesture + this.playerTwo.gesture) {
            case "rl":
                console.log(this.playerOne.name + " chose: Rock. " + this.playerTwo.name + " chose: Lizard. Rock smashes Lizard. " + this.playerOne.name + " wins this round!");
                this.playerOne.score++;
                break;
            case "rs":
                console.log(this.playerOne.name + " chose: Rock. " + this.playerTwo.name + " chose: Scissors. Rock crushes Scissors. " + this.playerOne.name + " wins this round!");
                this.playerOne.score++;
                break;
            case "lk":
                console.log(this.playerOne.name + " chose: Lizard. " + this.playerTwo.name + " chose: Spock. Lizard poisons Spock. " + this.playerOne.name + " wins this round!");
                this.playerOne.score++;
                break;
            case "lp":
                console.log(this.playerOne.name + " chose: Lizard. " + this.playerTwo.name + " chose: Paper. Lizard eats Paper. " + this.playerOne.name + " wins this round!");
                this.playerOne.score++;
                break;
            case "ks":
                console.log(this.playerOne.name + " chose: Spock. " + this.playerTwo.name + " chose: Scissors. Spock smashes Scissors. " + this.playerOne.name + " wins this round!");
                this.playerOne.score++;
                break;
            case "kr":
                console.log(this.playerOne.name + " chose: Spock. " + this.playerTwo.name + " chose: Rock. Spock vaporizes Rock. " + this.playerOne.name + " wins this round!");
                this.playerOne.score++;
                break;
            case "sp":
                console.log(this.playerOne.name + " chose: Scissors. " + this.playerTwo.name + " chose: Paper. Scissors cut Paper. " + this.playerOne.name + " wins this round!");
                this.playerOne.score++;
                break;
            case "sl":
                console.log(this.playerOne.name + " chose: Scissors. " + this.playerTwo.name + " chose: Lizard. Scissors decapitate Lizard. " + this.playerOne.name + " wins this round!");
                this.playerOne.score++;
                break;
            case "pr":
                console.log(this.playerOne.name + " chose: Paper. " + this.playerTwo.name + " chose: Rock. Paper covers Rock. " + this.playerOne.name + " wins this round!");
                this.playerOne.score++;
                break;
            case "pk":
                console.log(this.playerOne.name + " chose: Paper. " + this.playerTwo.name + " chose: Spock. Paper disproves Spock. " + this.playerOne.name + " wins this round!");
                this.playerOne.score++;
                break;
            case "rp":
                console.log(this.playerOne.name + " chose: Rock. " + this.playerTwo.name + " chose: Paper. Paper covers Rock. " + this.playerTwo.name + " wins this round!");
                this.playerTwo.score++;
                break;
            case "rk":
                console.log(this.playerOne.name + " chose: Rock. " + this.playerTwo.name + " chose: Spock. Spock vaporizes Rock. " + this.playerTwo.name + " wins this round!")
                this.playerTwo.score++;
                break;
            case "lr":
                console.log(this.playerOne.name + " chose: Lizard. " + this.playerTwo.name + " chose: Rock. Rock smashes Lizard. " + this.playerTwo.name + " wins this round!")
                this.playerTwo.score++;
                break;
            case "ls":
                console.log(this.playerOne.name + " chose: Lizard. " + this.playerTwo.name + " chose: Scissors. Scissors decapitate Lizard. " + this.playerTwo.name + " wins this round!")
                this.playerTwo.score++;
                break;
            case "kl":
                console.log(this.playerOne.name + " chose: Spock. " + this.playerTwo.name + " chose: Lizard. Lizard poisons Spock. " + this.playerTwo.name + " wins this round!")
                this.playerTwo.score++;
                break;
            case "kp":
                console.log(this.playerOne.name + " chose: Spock. " + this.playerTwo.name + " chose: Paper. Paper disproves Spock. " + this.playerTwo.name + " wins this round!")
                this.playerTwo.score++;
                break;
            case "sk":
                console.log(this.playerOne.name + " chose: Scissors. " + this.playerTwo.name + " chose: Spock. Spock smashes Scissors. " + this.playerTwo.name + " wins this round!")
                this.playerTwo.score++;
                break;
            case "sr":
                console.log(this.playerOne.name + " chose: Scissors. " + this.playerTwo.name + " chose: Rock. Rock crushes Scissors. " + this.playerTwo.name + " wins this round!")
                this.playerTwo.score++;
                break;
            case "ps":
                console.log(this.playerOne.name + " chose: Paper. " + this.playerTwo.name + " chose: Scissors. Scissors cut Paper. " + this.playerTwo.name + " wins this round!")
                this.playerTwo.score++;
                break;
            case "pl":
                console.log(this.playerOne.name + " chose: Paper. " + this.playerTwo.name + " chose: Lizard. Lizard eats Paper. " + this.playerTwo.name + " wins this round!")
                this.playerTwo.score++;
                break;
            case "rr":
                console.log(this.playerOne.name + " chose: Rock. " + this.playerTwo.name + " chose: Rock. It's a tie. No one wins this round!");
                break;
            case "ll":
                console.log(this.playerOne.name + " chose: Lizard. " + this.playerTwo.name + " chose: Lizard. It's a tie. No one wins this round!");
                break;
            case "kk":
                console.log(this.playerOne.name + " chose: Spock. " + this.playerTwo.name + " chose: Spock. It's a tie. No one wins this round!");
                break;
            case "ss":
                console.log(this.playerOne.name + " chose: Scissors. " + this.playerTwo.name + " chose: Scissors. It's a tie. No one wins this round!");
                break;
            case "pp":
                console.log(this.playerOne.name + " chose: Paper. " + this.playerTwo.name + " chose: Paper. It's a tie. No one wins this round!");
                break;
        }
    }
    

    announceGameWinner() {
        console.log("Game over")
        if (this.playerOne.score > this.playerTwo.score) {
            console.log("Congrats! " + this.playerOne.name + " wins!");
        } if (this.playerOne.score < this.playerTwo.score) {
            console.log("Congrats! " + this.playerTwo.name + " wins!");
        }
    } 
        
    anotherGameChoice() {
    console.log("Please enter 'q' for quit or 'r' for a rematch.");
    let anotherGameChoice = prompt();
    if (anotherGameChoice != 'q' && anotherGameChoice != 'r') {
        console.log('Invalid key entered. Please try again.');
        this.anotherGameChoice();
    } if (anotherGameChoice === 'r') {
        this.runGame();
    } if (anotherGameChoice === 'q') {
        console.log('Thanks for playing. Play again soon. Have a wonderful Rock, Paper, Scissors, Lizard, Spock rest of the day!');
    }
    
    }
}

let game = new Game();
game.runGame();



