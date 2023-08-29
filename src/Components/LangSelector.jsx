import "./LangSelector.css"

function LangSelector({setDirection}) {
    return (
        <div className={"lang-shell"}>
        <button className={"lang-btn"} onClick={() => setDirection("LV")}>LV</button>
        <button className={"lang-btn"} onClick={() => setDirection("RU")}>RU</button>
        </div>
    )
}

export default LangSelector