import ProgressBar from 'react-customizable-progressbar'
import '../assets/styles/progress.css'

function Progress({ wordNumber , totalCorrectAnswers} ) {
    return (
        <div className="d-flex justify-content-evenly align-items-center">

            <span style={{fontSize: '0.8em'}}>Word {wordNumber} / 10</span>

            <ProgressBar
                radius={50}
                progress={wordNumber* 10}
                strokeWidth={5}
                strokeColor="#ffffff"
                trackStrokeWidth={5}
            >
                <div className="indicator">
                    <div>{wordNumber * 10}%</div>
                </div>
            </ProgressBar>

            <div className='correct-answers-container'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                {totalCorrectAnswers}
            </div>
            
        </div>
    );
}

export default Progress;