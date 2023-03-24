import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
let [chosenWord, setChosenWord]=useState(null)
let [results, setResults]=useState(null)

function search(event){
    event.preventDefault()
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${chosenWord}`
axios.get(apiUrl).then(handleResponse);
}

function handleResponse(response){
    setResults(response.data[0])
}

function changeWord(event){
    setChosenWord(event.target.value)
}
    
    return(<div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={changeWord} className="input-search"></input>
            <input type="submit" value="Search" className="input-submit"></input>
        </form>
        <Results results={results}/>
    </div>);
}