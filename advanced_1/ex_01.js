const WORD_TYPES = ['adjective', 'noun', 'adverb', 'verb'];
const WORD_OPTIONS = {adjective: ['stinky', 'gregarious', 'plump', 'putrid', 'odorless', 'hairy'],
                      noun: ['Herman', 'cat', 'hot air balloon', 'muskateer', 'tree', 'bunny', 'hiccups'],
                      adverb: ['jokingly', 'accidentally', 'purposely', 'carefully', 'immediatly', 'lovingly'],
                      verb: ['runs', 'gobbles', 'sneaks', 'chews', 'stifles', 'grabs', 'bounces']
                     };

let template1 = 'The -adjective- brown -noun- -adverb- -verb- the -adjective- yellow -noun-, who -adverb- -verb- his -verb- and looks around.';
let template2 = "The -noun- -verb- the -noun-'s -noun-.";

function getRandomNum(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function madlibs(template) {
  WORD_TYPES.forEach(wordType => {
    let availableWords = Object.values(WORD_OPTIONS[wordType]).slice();
    let searchString = '-' + wordType + '-';

    while (template.includes([wordType])) {
      let randomIdx = getRandomNum(availableWords.length);
      let replacementWord = availableWords.splice(randomIdx, randomIdx + 1)[0];
      template = template.replace(searchString, replacementWord);
    }
  });

  console.log(template);
}

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".