import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import { SIGKILL } from "constants";
import Fullpage from "./components/Fullpage";
import Titlesection from "./sections/Titlesection";
import Aboutsection from "./sections/Aboutsection";
import Skillsection from "./sections/Skillsection";
import SnowStorm from "react-snowstorm";
import snowstorm from "react-snowstorm/lib/snowstorm";
import Header from "./components/Header";
import Navigation from "./components/Navigation"

import * as Scroll from "react-scroll";
import { Link, Element } from "react-scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background_first: "white",
      background_second: "white",
      background_third: "white",
      counter: 0
    };
  }
  changeColor = () => {
    let zamine = ["green", "yellow", "blue", "pink"];
    
    if (this.state.counter > 3) {
      this.setState({
        counter: 0,
        background_first:zamine[this.state.counter],
        background_second:zamine[this.state.counter],
        background_third: zamine[this.state.counter]
      });
    } else
      this.setState({
        background_first: zamine[this.state.counter],
        background_second: zamine[this.state.counter],
        background_third: zamine[this.state.counter],
        counter: this.state.counter + 1
      });
      
  };

  render(){
  return (
    <div className="App">
      <SnowStorm />
      <Navigation />
      <div className="changetheme">
      <img onClick={this.changeColor} src="images/color.png" alt="" />
      </div>
      <Titlesection bgcolor={this.state.background_first}/>

      <Aboutsection bgcolor={this.state.background_second}/>

      <Skillsection bgcolor={this.state.background_third} />
    </div>
  );
  }
}

export default App;
