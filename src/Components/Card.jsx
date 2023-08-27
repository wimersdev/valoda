import "./Card.css"

function Card({ source, translation, showTranslation, toggleTranslation }) {

    return(
        <>
            <div onClick={toggleTranslation} className={"card"}>
                <p>{source}</p>
                {showTranslation && <p>{translation}</p>}
            </div>
        </>
    )
}
export default Card