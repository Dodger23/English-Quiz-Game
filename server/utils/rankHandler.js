const DBController = require("../data/controller.js");

const scoresList = DBController.getScores();

/**
 * @description calculate use rank given his score
 * @param  score user score
 * @returns rank% rounded to the nearest hundredth. The rank represents the percentage of scores (check scoresList in TestData.json)
    below the given final score.
 */
module.exports.getRank = function getRank(score) {
   
   let lowerScores = scoresList.filter((item) => item < score);

    let rank = ((lowerScores.length / scoresList.length) * 100).toFixed(2);

    return rank;
  };