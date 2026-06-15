const Flashcard = ({ card, isFlipped, onClick }) => {
    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
            <div className="flip-card-inner">
                <div className={`flip-card-front ${card.category}`}>
                    <h3>{card.question}</h3>
                </div>
                
                <div className="flip-card-back">
                    <h3>{card.answer}</h3>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;