import Container from "react-bootstrap/esm/Container"
import ProgressBar from "../components/Progress.js"

function Quiz () {
    const wordNumber = 1 ; 
    const totalCorrectAnswers = 0;

    return (
        <Container>
            <div  style={{height: '83vh'}} className='d-flex flex-column justify-content-between'>

                <ProgressBar wordNumber={wordNumber} totalCorrectAnswers={totalCorrectAnswers}/>
                <div>Word</div>
                <div>Actions</div>
                <div>Button</div>
            </div>
            
        </Container>
    )
}

export default Quiz