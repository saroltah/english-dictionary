import React, {useState} from "react";
import "./Dictionary.css"

export default function (Dictionary){
let [mainWord, setMainWord]=useState(null)
function search(event){
    event.preventDefault();
    alert (`Searching for ${mainWord}`);
}

function changeWord(event){
    setMainWord(event.target.value)
}
    
    return(<div>
        <header>
        <h1>English Dictionary</h1>
        <form onSubmit={search}>
            <input type="search" onChange={changeWord}></input>
            <input type="submit"></input>
        </form>
        </header>
    </div>)
}