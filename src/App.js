import './App.css'
import React from 'react'
import Dictionary from "./Dictionary"

export default function (App){
  return(<div className="App">
    <header>
        <h1>English Dictionary</h1>
         </header>
         <div className="Search">
         <h2>Choose your word:</h2>
           <Dictionary/>
           </div>
  <footer>Coded by <a target="_blank"
            href="https://cool-entremet-69e2c9.netlify.app/"
            > Sarolta Hegyi</a
          > and has open source code on <a target="_blank" href="https://github.com/saroltah/english-dictionary">Github</a>. </footer>
  </div>)
}