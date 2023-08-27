import './App.css'
import Card from "./Components/Card.jsx";
import words from "./Components/Words.jsx";



function App() {

  return (
    <>
        <div className={"shell"}>
            {words.map((word,index)=>(
                <Card key={index} source={word.source} translate={word.translate} />))
            }

        </div>
    </>
  )
}

export default App
