import React from "react";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
import { name, city, bio, github, linkedin } from "./data/user"; 

function App() {
  const { name, city, bio, links } = user;
  return (
    <div>
     
      <Home name={name} city={city} />

     
      <About bio={bio} />

    
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
