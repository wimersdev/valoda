import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./Components/Card.jsx";
import useWords from "./Components/Words.jsx";
//import wordsArray from "./Components/WordsArray.jsx";
import LangSelector from "./Components/LangSelector.jsx";

function App() {
    const [randomWord, setRandomWord] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);
    const [recentWords, setRecentWords] = useState([]);
    const [direction, setDirection] = useState("LV")
    const words = useWords();
    //const words = wordsArray

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


                {direction === "LV" && <Card
                    source={words[randomWord]?.source}
                    translation={words[randomWord]?.translation}
                    showTranslation={showTranslation}
                    toggleTranslation={toggleTranslation}
                />}
                {direction === "RU" && <Card
                    source={words[randomWord]?.translation}
                    translation={words[randomWord]?.source}
                    showTranslation={showTranslation}
                    toggleTranslation={toggleTranslation}
                />}

                <LangSelector setDirection={setDirection}/>



            </div>
        </>
    )
}

export default App;
