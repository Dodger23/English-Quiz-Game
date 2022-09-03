let DBController = require("../data/controller");
const nounList = DBController.getNouns();
const adjectiveList = DBController.getAdjectives();
const verbList = DBController.getVerbs();
const adverbList = DBController.getAdverbs();

let result = [];
let counter = 0;
/**
 *
 * @param {*} len refer to required length of generated array
 * @returns a list of 10 objects selected randomly from the "wordsList". The array should include at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
 */
module.exports.getRandomWordList = function getRandomWordList(len = 10) {
  while (result.length < len) {
      getNewAdverb();
      if( result.length >= len) return 
      getNewVerb();
      if( result.length >= len) return 
      getNewNoun();
      if( result.length >= len) return 
      getNewAdjective();
  }
  result.sort((a,b) => {
      let random = ( '0.' + ( Math.round(new Date().getTime() *  Math.random())));
      return 0.5 - parseFloat(random)
  })
  return result;
};

function getNewVerb() {
  if (verbList.length) {
    result.push(verbList[0]);
    verbList.shift();
  }
  return;
}

function getNewNoun() {
  if (nounList.length) {
    result.push(nounList[0]);
    nounList.shift();
  }
  return;
}

function getNewAdjective() {
  if (adjectiveList.length) {
    result.push(adjectiveList[0]);
    adjectiveList.shift();
  }
  return;
}

function getNewAdverb() {
  if (adverbList.length) {
    result.push(adverbList[0]);
    adverbList.shift();
  }
  return;
}