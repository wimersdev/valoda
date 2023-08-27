import { useEffect, useState } from 'react';

const useWords = () => {
    const [words, setWords] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/wimersdev/valoda/master/src/data/words.json')
            .then(response => response.json())
            .then(data => setWords(data))
    }, []);

    return words
}


export default useWords