"use strict";

const prompt = require('prompt-sync')();

//const displayRules = require("./rules")

function menu() {
    console.log("Welcome to Rock, Paper, Scissor, Lizard, Spock!\n\nWould you like to play best of three, see the rules, or quit?\n\nType the option you want: 'play' 'rules' or 'quit.'");
    let choice = prompt().toLowerCase();
    switch(choice) {
        case 'play':
            const player = require("./game").selectPlayer();
            break;
        case 'rules':
            const displayRules = require("./rules").rules;
            break;
        case 'quit':
            const quit = require("./quit");
            break;
        default:
            break;
    }  
}



module.exports.menu = menu();