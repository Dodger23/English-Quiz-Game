const fs = require("fs");

// Read raw data from TestData.json
let res = fs.readFileSync("data/TestData.json");
data = JSON.parse(res);


// ******* fetching scores *******************
module.exports.getScores = function getScores() {
    return data.scoresList;
};


// ==========================================================



// ******* fetching wordsList ******************


// words caregories
const wordsCategories = {
    "noun": [],
    "adjective": [],
    "adverb": [],
    "verb": []
}


// shuffle words in wordList to prevent repeataion
function shuffleWords(wordList) {
    
    wordList.sort((a, b) => {
        let random = ( '0.' + ( Math.round(new Date().getTime() *  Math.random())));
        return 0.5 - parseFloat(random)
    })
    
    return wordList
}

// categorize words to ease the process of selecting from them
function categorizeWords(wordList) {
    for(let i =0 ; i < wordList.length ; i++) {
        let category = wordList[i].pos;
        wordsCategories[category].push(wordList[i]);
    }
}

// prepare words for fetching
let wordList = data.wordList;

shuffleWords(wordList);
categorizeWords(wordList);



module.exports.getNouns = function getNouns() {
    return wordsCategories['noun'];
};


module.exports.getAdverbs = function getAdverbs() {
    return wordsCategories['adverb'];
};


module.exports.getVerbs = function getVerbs() {
    return wordsCategories['verb'];
};


module.exports.getAdjectives = function getAdjectives() {
    return wordsCategories['adjective'];
};




