const READLINE = require('readline-sync');

const PROMPT = message => {
  console.log('=> ' + message);
};

PROMPT('Enter a noun:');
let noun = READLINE.question('');

PROMPT('Enter a verb:');
let verb = READLINE.question('');

PROMPT('Enter an adjective:');
let adjective = READLINE.question('');

PROMPT('Enter an adverb:');
let adverb = READLINE.question('');


let story = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!\nThe ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.\nThe ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(story);