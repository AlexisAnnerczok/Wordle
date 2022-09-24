"use strict";
exports.__esModule = true;
// Importation des fonctions de lib.ts
var lib_1 = require("./lib");
// Instanciation des variables principales.
var random = [];
var input = [];
// Fonction RandomWord qui génère un mot au hasard
function RandomWord() {
    random = (0, lib_1.getRandomWord)().split('');
    console.log(random);
}
// Fonction Input qui récupère une entrée utilisateur et vérifie la correspondence des mots
function Input() {
    input = (0, lib_1.getInput)('Type a word of 5 letters').toUpperCase().split('');
    console.log(input); // A enlever après
    for (var i = 0; i < random.length; i += 1) {
        if (input[i] !== random[i]) {
            if (random.includes(input[i])) {
                console.log("The letter ".concat(input[i], " is in the word but in the wrong spot \n"));
            }
            else {
                console.log("The letter ".concat(input[i], " is not in the world in any spot \n"));
            }
        }
        else {
            console.log("The letter ".concat(input[i], " is in the word and in the correct place \n"));
        }
    }
    for (var i2 = 0; i2 < random.length; i2 += 1) {
        if (input[i2] !== random[i2]) {
            return Input();
        }
    }
    console.log('You found the correct word, good job !');
}
// Lancement d'une partie
function Play() {
    console.log('Tapez un mot pour commencer');
    RandomWord();
    Input();
}
Play();
