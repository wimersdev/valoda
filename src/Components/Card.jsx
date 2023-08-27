import "./Card.css"

function Card({source,translate}) {
    return(
        <>
            <div className={"card"}>
                <p>{source}</p>
                <p>{translate}</p>
            </div>
        </>
    )
}
export default Card