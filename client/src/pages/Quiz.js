import { useState, useEffect } from "react";
import {useNavigate, useLocation} from "react-router-dom";
import { toast } from 'react-toastify';
import apiClient from '../services'
import endPoints from '../services/endpoints'

import '../assets/styles/quiz.css'
import Loading from "../components/Loding.js";
import QuizContainer from "../containers/Quiz.js";

function Quiz () {
    const {state} = useLocation()
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
        .catch(err => console.log(err.message))

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
    
    const increaseTotalCorrectAnswers = () => {
        setTotalCorrectAnswers(totalCorrectAnswers + 1);
    }

    const showCorrectAnswerNotify = () => {
        toast("That is correct 😃🎉");
    }

    const showWrongAnswerNotify = () => {
        toast("Oops! Not right 😓");
    }

    const updateAnswerValue = (syntactic) => {
        setCurrentQuestion({
            ...currentQuestion,
            answer: syntactic
        });
    }

    const handleAnswer = (syntactic) => {
        if(syntactic === currentQuestion.pos) {
            increaseTotalCorrectAnswers();
            showCorrectAnswerNotify();
        } else {
            showWrongAnswerNotify();
        }

        updateAnswerValue(syntactic)
    }

    const handleOnNextButtonClick = () => {
        if(currentQuestion.number === 9) {
            toast.dismiss(); 
             navigate("/rank", {state: {...state, score: totalCorrectAnswers}})
        } else {
            handleNextQuestion()
        }         
    }
    

    if(isLoading) return <Loading />

    return (
        <QuizContainer 
        currentQuestion={currentQuestion} 
        totalCorrectAnswers={totalCorrectAnswers} 
        handleAnswer={handleAnswer} 
        handleOnNextButtonClick={handleOnNextButtonClick}
        state={state}/>
    )
}

export default Quiz