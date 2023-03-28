import React from "react";
import "./Synonyms.css"

export default function Synonyms(props){
   if (props.synonyms){
        return(
            <span className="Synonyms">
{props.synonyms.map(function (synonym,index){
    return <div key={index}>{synonym}</div>;
})} 
        </span>
        );
}else{
        return null;
    }}