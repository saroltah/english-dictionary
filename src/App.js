import "./style/App.css";
import React from "react";
import Dictionary from "./Dictionary";
import Hero from "./Hero";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <div className="Search">
        <h2>Choose your word:</h2>
        <Dictionary />
      </div>
      <footer>
        Coded by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://saroltah.github.io/portfolio-saroltah/projects.html">
          {" "}
          Sarolta Hegyi
        </a>{" "}
        and has open source code on{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/saroltah/english-dictionary">
          Github
        </a>
        .{" "}
      </footer>
    </div>
  );
}
