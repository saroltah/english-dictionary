import React from "react";
import "./style/Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {" "}
        🔊{" "}
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
