import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
let [mainWord, setMainWord]=useState(null)
let [results, setResults]=useState(null)

function search(event){
    event.preventDefault()
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${mainWord}`
axios.get(apiUrl).then(handleResponse);
}

function handleResponse(response){
    console.log(response.data[0].meanings[0])
    setResults(response.data[0])
}

function changeWord(event){
    setMainWord(event.target.value)
}
    
    return(<div>
        <form onSubmit={search}>
            <input type="search" onChange={changeWord}></input>
            <input type="submit"></input>
        </form>
        <Results results={results}/>
    </div>);
}