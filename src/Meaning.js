import React from "react"
import "./Meaning.css"
import Synonyms from "./Synonyms"

export default function Meaning(props){
    return (<div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definition, index)
    {
        return(
        <div key={index}>
            <p>
                {definition.definition}
                <br/>
                <span className="definitions">
                    <div className="Example">
               <em>{definition.example}</em> 
               </div>
               </span>
               <div className="Synonyms">
               <Synonyms synonyms={definition.synonyms}/>
               </div>
                </p>
   </div>
        );
    })}
</div>
);
}