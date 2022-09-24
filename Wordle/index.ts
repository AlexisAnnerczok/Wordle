// Importation des fonctions de lib.ts
import { getInput, getRandomWord } from './lib';

// Instanciation des variables principales.
let random: string[] = [];
let input: string[] = [];

// Fonction RandomWord qui génère un mot au hasard
function RandomWord() {
  random = getRandomWord().split('');
  console.log(random);
}

// Fonction Input qui récupère une entrée utilisateur et vérifie la correspondence des mots

function Input() {
  input = getInput('Type a word of 5 letters').toUpperCase().split('');
  console.log(input); // A enlever après
  for (let i: number = 0; i < random.length; i += 1) {
    if (input[i] !== random[i]) {
      if (random.includes(input[i])) {
        console.log(`The letter ${input[i]} is in the word but in the wrong spot \n`);
      } else {
        console.log(`The letter ${input[i]} is not in the world in any spot \n`);
      }
    } else {
      console.log(`The letter ${input[i]} is in the word and in the correct place \n`);
    }
  }
  for (let i2: number = 0; i2 < random.length; i2 += 1) {
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
