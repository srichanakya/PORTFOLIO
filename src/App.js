import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
