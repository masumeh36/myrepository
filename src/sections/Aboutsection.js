import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import "./Aboutsection.css"
import { Link, Element } from "react-scroll";
class Aboutsection extends Component {
  render() {
    return (
      <div>
        <Element name="Aboutus" className="element" />
      <Fullpage className="second" bgcolor={this.props.bgcolor}>
        <h3>{data.sections[0].title}</h3>
        <p>{data.sections[0].items[0].content}</p>
      </Fullpage>
      
      </div>
    );
  }
}

export default Aboutsection;
