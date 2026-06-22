import './App.css';
import { useState } from 'react';
import Flashcard from './components/Flashcard';

    const cards = [
        { question: 'Which dog is known for its short legs and high prey drive?', answer: 'Dachshund', category: 'easy' },
        { question: 'The smallest dog breed in the world, which dog breed is known for its compact size?', answer: 'Chihuahua', category: 'easy' },
        { question: 'What dog is most widely kept as a companion/guide dog?', answer: 'Labrador Retriever', category: 'easy' },
        { question: 'Known as a show dog with a thick, curly coat with tufts of hair on certain parts, what dog breed is this?', answer: 'Poodle', category: 'medium' },
        { question: 'Which dog breed is known for its egg-shaped head and being the mascot of Target?', answer: 'Bull Terrier', category: 'hard' },
        { question: 'Which dog breed is known as a sled dog and howling behavior?', answer: 'Siberian Husky', category: 'medium' },
        { question: 'Which dog originated in Wales and has short legs?', answer: 'Welsh Corgi', category: 'easy' },
        { question: 'What dog breed is known for tracking, and as the reference for Snoopy?', answer: 'Beagle', category: 'medium' },
        { question: 'What dog breed has a distinctive brown dot above each eye?', answer: 'Rottweiler', category: 'hard' },
        { question: 'Which dog breed has a distinct wrinkled, short-muzzled face and curled tail?', answer: 'Pug', category: 'easy' }
    ];


const App = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState('');

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    const nextCard = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            resetCardState();
        }
    };

    const previousCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            resetCardState();
        }
    };

    const resetCardState = () => {
        setIsFlipped(false);
        setUserGuess('');
        setFeedback('');
    };

    const handleInputChange = (e) => {
        setUserGuess(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        
        const cleanGuess = userGuess.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
        const cleanAnswer = cards[currentIndex].answer.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

        if (cleanGuess === cleanAnswer) {
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
    };

    return (
        <div className = "App">
            <div className = "header">
                <p> ⋆˚🐾˖°</p>
                <h1>Dog Breed Test</h1>
                <h2>Test your knowledge on the traits of various dog breeds!</h2>
                <p className="card-count">Card {currentIndex + 1} of {cards.length}</p>
                <Flashcard card = {cards[currentIndex]} isFlipped = {isFlipped} onClick = {flipCard}/>
                <form onSubmit={submit} className="guess-form">
                    <p>Guess the answer here: </p>
                    <input 
                        type="text"
                        className={`response ${feedback}`} 
                        placeholder="Place your answer here"
                        value={userGuess}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="submit">Submit</button>
                </form>
                <br></br>
                <div className = "controls">
                    <button type = "button" className = "previousCard" onClick = {previousCard} disabled = {currentIndex === 0}>←</button>
                    <button type = "button" className = "nextCard" onClick = {nextCard} disabled = {currentIndex === cards.length - 1}>→</button>
                </div>
            </div>
        </div>
    );
};

export default App;