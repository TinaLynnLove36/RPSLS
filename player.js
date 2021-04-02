"use strict";

const prompt = require('prompt-sync')();

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];  
        }
    
    }

    class Human extends Player {
        constructor() {
        super();
        this.choosePlayerName();

    } choosePlayerName() {
        this.name = prompt();
}
}
    class Computer extends Player {
        constructor() {
        super();
    }
}


    module.exports.player = new Player();
    module.exports.human = new Human();
    module.exports.computer = new Computer();