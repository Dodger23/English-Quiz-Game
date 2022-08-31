const fs = require("fs");

// Read raw data from TestData.json
let res = fs.readFileSync("data/TestData.json");
data = JSON.parse(res);


// fetching scores
module.exports.getScores = function getScores() {
    return data.scoreList;
};

// ==========================================================

// fetching wordsList

const wordsCategories = {
    "noun": [],
    "adjective": [],
    "adverb": [],
    "verb": []
}


// shuffle words in wordList to prevent repeataion
function shuffleWords(wordList) {
    return wordList.sort((a, b) => 0.5 - Math.random())
}

// categorize words to ease the process of selecting from them
function categorizeWords(wordList) {
    wordList.forEach(word => {
        let category = word.pos;
        wordsCategories[category].push(word);
    })
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




