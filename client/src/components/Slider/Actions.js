import { Link } from "react-router-dom";

function Actions({currentPage, showPrevPage, showNextPage}) {

    return (
        <div className="slider-actions-container pt-4">
            {currentPage === 0 
                ? <span></span>
                : <button onClick={showPrevPage} 
                    className="slider-action p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                    </svg>
                    Prev
                </button>
            }
            {currentPage === 2
                ? <Link to={'/home'} className='slider-action slider-action-finish p-2'>
                        Finish
                    </Link>
                : <button onClick={showNextPage}  
                    className="slider-action p-2">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>
                </button>
            }
        </div>
    );
}

export default Actions;