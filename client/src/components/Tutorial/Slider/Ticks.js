function Ticks({currentPage}) {
    return (
        <div className="slider-ticks-container my-3">
            <span className={currentPage === 0? "tick-button tick-button-active" : "tick-button"}></span>
            <span className={currentPage === 1? "tick-button tick-button-active" : "tick-button"}></span>
            <span className={currentPage === 2? "tick-button tick-button-active" : "tick-button"}></span>
        </div>
    );
}

export default Ticks;