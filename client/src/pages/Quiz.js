import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import ProgressBar from "../components/Progress.js"
import Button from '../components/Button'
import AnswerOption from "../components/AnswerOption.js";
import { toast } from 'react-toastify';

import '../assets/styles/quiz.css'

function Quiz () {
    const wordList = [
        {
            "id": 1,
            "word": "slowly",
            "pos": "adverb"
        },
        {
            "id": 2,
            "word": "ride",
            "pos": "verb"
        },
        {
            "id": 3,
            "word": "bus",
            "pos": "noun"
        },
        {
            "id": 4,
            "word": "commute",
            "pos": "verb"
        },
        {
            "id": 5,
            "word": "emissions",
            "pos": "noun"
        },
        {
            "id": 6,
            "word": "walk",
            "pos": "verb"
        },
        {
            "id": 7,
            "word": "fast",
            "pos": "adjective"
        },
        {
            "id": 8,
            "word": "car",
            "pos": "noun"
        },
        {
            "id": 9,
            "word": "crowded",
            "pos": "adjective"
        },
        {
            "id": 10,
            "word": "arrival",
            "pos": "noun"
        }
    ]
    const navigate = useNavigate();
    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState({
            number: 0, 
            ...wordList[0],
            answer: false
        })
    
        const handleNextQuestion= () => {
            toast.dismiss();
            let nextWordNumber = currentQuestion.number +1 ;
            setCurrentQuestion({
                number: nextWordNumber,
                ...wordList[nextWordNumber],
                answer: false
            })
        }

        const handleAnswer = (syntactic) => {
            if(syntactic === currentQuestion.pos) {
                setTotalCorrectAnswers(totalCorrectAnswers + 1);
                toast("That is correct 😃🎉")
            } else {
                toast("Oops! Not right 😓")
            }

            setCurrentQuestion({
                ...currentQuestion,
                answer: syntactic
            });
        }

    return (
        <Container>
            <div  style={{height: '83vh'}} className='d-flex flex-column justify-content-between'>

                <ProgressBar currentQuestionNumber={currentQuestion.number +1} totalCorrectAnswers={totalCorrectAnswers}/>
                
                <div className="question-word-container">
                    <span>
                        {currentQuestion.word}
                    </span>
                </div>
                
                <Row >
                    {
                        ['adverb', 'verb', 'noun', 'adjective'].map((syntactic, index) => 
                            <AnswerOption 
                                key={index}
                                title={syntactic} 
                                answer={currentQuestion.answer} 
                                correctAnswer={currentQuestion.pos}
                                handleAnswer={handleAnswer}>                            
                            </AnswerOption>
                        )
                    }
                    
                </Row>

                <div className="d-flex justify-content-center">
                    <Button 
                        title={currentQuestion.number === 9? 'Show my Rank' : 'Next Question'} 
                        onClick={currentQuestion.number === 9 ? () => navigate("/rank") :  handleNextQuestion}
                        disabled={currentQuestion.answer ? false : true}>
                    </Button>
                </div>
            </div>
            
        </Container>
    )
}

export default Quiz