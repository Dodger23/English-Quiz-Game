// import packages
const express = require('express');
const cors = require("cors");
const RankHandler = require("./utils/rankHandler.js")
const WordListHandler = require('./utils/wordListHandler.js')

// configure port
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/**
 * words endpoint
 * returns a list of 10 objects selected randomly from the "wordsList" (check
   wordsList in TestData.json). The array should include at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
 */
app.get('/words', (req, res) => {
  const wordList = WordListHandler.getRandomWordList();
  res.json(wordList)
  res.end();
});


/**
 * rank endpoint
 * description:takes the final score in the request body, and responds back with the rank%
    rounded to the nearest hundredth. The rank represents the percentage of scores (check scoresList in TestData.json)
    below the given final score.
 */
app.post('/rank', (req, res) => {

    const score = req.body.score

    let rank = RankHandler.getRank(score);

  res.json({ rank: rank });
});


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
