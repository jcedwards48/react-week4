import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>React Weather Engine</h1>
      <footer>
        This project was coded by Jeanne Edwards and is open-sourced on Github
        <a
          href="https://github.com/jcedwards48/react-week4"
          target="_blank"
        ></a>
        <Search />
      </footer>
    </div>
  );
}
