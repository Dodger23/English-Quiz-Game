function Ticks({currentPage}) {
    return (
        <div className="slider-ticks-container my-3">
            {
                [0, 1 , 2].map((pageNumber => 
                    <span 
                    key={pageNumber} 
                    className={currentPage === pageNumber? "tick-button tick-button-active" : "tick-button"}>
                    </span>
                ))
            }
        </div>
    );
}

export default Ticks;