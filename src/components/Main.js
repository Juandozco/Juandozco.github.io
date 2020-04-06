import React, { Component } from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

class Main extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Main;
