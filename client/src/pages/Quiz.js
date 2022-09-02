import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import ProgressBar from "../components/Progress.js"
import Button from '../components/Button'
import AnswerOption from "../components/AnswerOption.js";
import { toast } from 'react-toastify';
import apiClient from '../services'
import endPoints from '../services/endpoints'

import '../assets/styles/quiz.css'

function Quiz () {
    const [wordsList, setWordsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState({
            number: 0, 
            id: null,
            word: '',
            pos: '',
            answer: false
        })
    

    useEffect(() => {
        async function fetchWordsList() {
            const result = await apiClient.get(
                endPoints.wordsList,
            );
            return result
        }
        
        fetchWordsList()
        .then(res => res.data)
        .then(data => {
            setWordsList(data)
            setCurrentQuestion({
                number: 0,
                ...data[0],
                answer: false
            })
        })
        .then(() => setIsLoading(false))
    }, []);
    
    
    
    const handleNextQuestion= () => {
        toast.dismiss();
        let nextWordNumber = currentQuestion.number +1 ;
        setCurrentQuestion({
            number: nextWordNumber,
            ...wordsList[nextWordNumber],
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
            {
                isLoading 
                ? <div style={{height: '83vh'}} className=" d-flex justify-content-center align-items-center">Loading ...</div>

                : <div  style={{height: '83vh'}} className='d-flex flex-column justify-content-between'>

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
            }
            
        </Container>
    )
}

export default Quiz