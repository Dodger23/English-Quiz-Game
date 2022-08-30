const fs = require("fs");

// Read raw data from TestData.json
let data = fs.readFileSync("data/TestData.json");
data = JSON.parse(data);

let scoresList = data.scoresList;

module.exports.getScores = function getScores() {
    return scoresList;
};



