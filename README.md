# JavaScript Developer Task @ Nagwa
This project is a task for a JavaScript Developer position at Nagwa company

## [Figma Design ](https://www.figma.com/file/dRxzCFAHoPJojNM1tLxJjg/Nagwa?node-id=0%3A1)
The UI design for the project


##  Task Description: 

 In English language, words can be categorized according to their syntactic functions, which is known as "Part of Speech".
Examples of part of speech: (noun, verb, adjective, ...)
Check this [link](Must%20apply%20code%20reuse.%20Never%20write%20the%20same%20code%20twice%20%28DRY%20clean%20code%20concept%29.) for more information.
Your task is to make an interactive activity using React.js, node.js, and Express.js that helps the students practice categorizing a
set of words according to their part of speech.
Feel free to make the design that you feel proper for such activity as long as it follows the below requirements.

### Testing Data:

No need to create a database, you can use the data provided in the attached JSON file (TestData.json).


### Requirements: 

 - **The Express App (server side) should**: 
	  - **words endpoint**: provides an endpoint that returns a list of 10 objects selected randomly from the "wordsList" (check
wordsList in TestData.json). The array should include at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
	 - **rank endpoint**: provides an endpoint that takes the final score in the request body, and responds back with the rank%
rounded to the nearest hundredth. The rank represents the percentage of scores (check scoresList in TestData.json)
below the given final score.

- **Score (Rank):**
	- There are 24 scores out of 30 in the scoresList which are below 90. This is 80% of the scoresList, so the rank will be
80%. (check scoresList in TestData.json)

- **The React App (client side) should include**:
	- **Practice Screen**:
		- Fetch the words list from "words" endpoint.
		- Shows the student one word each time and below the word there are four buttons respresenting for options of part of
speech (noun, adverb, adjective, or verb)
		- After an option got selected, the student should get a feedback whether his/her answer was correct or incorrect.
		- However, it shouldn't show the correct answer in case an incorrect answer got selected.
Has a progress bar that shows the student his/her progress in %
Progress is calculated as follows: 
			> (number of answered questions / total number of questions)*100
			
	- **Rank Screen**:
		- Displayed after the user answers the final question
		- Send a POST request to "rank" endpoint to get the student's rank based on his/her score % provided in the request body.
Score is calculated as follows: 
			> (number of correct answers / total number of questions)*100
			
		- Shows the student his/her rank across his/her peers (not his/her score) when he/she reaches progress of 100% (finishes
the activity).
		- Has a "Try Again" button that enables the student to repeat the activity again.


### Important Notes

 - Code readability is a must. Write comments to explain your code.
 - Follow a clean code structure.
- Must apply code reuse. Never write the same code twice (DRY clean code concept).


## How to Run in development mode?

 1. Clone the repo by `git clone <this repo link>`
 2. Open the downloaded folder `English-Quiz-Game` 
 3. Inside `English-Quiz-Game` open a terminal or cmd and run these commands
	- `cd server`
	- `npm start`
 4. Keep that terminal alive for the server
 5. Inside `English-Quiz-Game` open another terminal and run these commands
	- `cd client`
	- `npm start`

## How to Run in production  mode?

 1. Clone the repo by `git clone <this repo link>`
 2. Open the downloaded folder `English-Quiz-Game` 
 3. Inside `English-Quiz-Game` open a terminal or cmd and run these commands
	- `cd server`
	- `node app.js`
 4. Keep that terminal alive for the server
 5. Inside `English-Quiz-Game` open another terminal and run these commands
	- `cd client`
	- `npm build`
 6. Wait for the script to finish
 7. Run `npx serve -s build`
 8. input `y` in the terminal when asked for premission to install `serve` package