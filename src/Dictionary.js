import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";



export default function Dictionary(){
let [chosenWord, setChosenWord]=useState(null)
let [results, setResults]=useState(null)
let [photos, setPhotos]=useState(null)

function search(event){
    event.preventDefault()
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${chosenWord}`
axios.get(apiUrl).then(handleResponse);

let pexelsApiKey="38069tb3ob458e7f0844daa0ff153e75"
let pexelsUrl=`https://api.shecodes.io/images/v1/search?query=${chosenWord}&key=${pexelsApiKey}`

axios.get(pexelsUrl).then(handleImages);
}

function handleImages(response){
    setPhotos(response.data.photos)
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
        <Photos photos={photos}/>
    </div>);
}