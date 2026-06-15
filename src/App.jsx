import './App.css';
import { useState } from 'react';
import Flashcard from './components/Flashcard';

const App = () => {

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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    const nextCard = () => {
        setIsFlipped(false);
        let randomIndex = currentIndex;
        while(randomIndex === currentIndex) {
            randomIndex = Math.floor(Math.random() * cards.length);
        }
        setCurrentIndex(randomIndex);
    };

    return (
        <div className = "App">
            <div className = "header">
                <p> ⋆˚🐾˖°</p>
                <h1>Dog Breed Test</h1>
                <h2>Test your knowledge on the traits of various dog breeds!</h2>
                <p>Number of cards: {cards.length}</p>
                <Flashcard card = {cards[currentIndex]} isFlipped = {isFlipped} onClick = {flipCard}/>
                <button type = "button" className = "nextCard" onClick = {nextCard}>➜</button>
            </div>
        </div>
    );
};

export default App;