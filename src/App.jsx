import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./Components/Card.jsx";
import useWords from "./Components/Words.jsx";

function App() {
    const [randomWord, setRandomWord] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);
    const [recentWords, setRecentWords] = useState([]);
    const words = useWords();

    const makeRandom = () => {
        let newRandomWord;
        do {
            newRandomWord = Math.floor(Math.random() * words.length);
        } while (recentWords.includes(newRandomWord));

        setRecentWords(prevRecent => {
            const updatedRecent = [...prevRecent, newRandomWord];
            return updatedRecent.length > 10 ? updatedRecent.slice(1) : updatedRecent;
        });

        setRandomWord(newRandomWord);
        setShowTranslation(false);
    };

    const toggleTranslation = () => {
        setShowTranslation(true);
        setTimeout(() => {
            setShowTranslation(false);
            makeRandom();
        }, 3000);
    };

    return (
        <>
            <div className={"shell"}>
                <Card
                    source={words[randomWord]?.source}
                    translation={words[randomWord]?.translation}
                    showTranslation={showTranslation}
                    toggleTranslation={toggleTranslation}
                />

            </div>
        </>
    )
}

export default App;
