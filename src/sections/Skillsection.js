import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import Skillcard from "../components/Skillcard";
import "./Skillsection.css"
import { Link, Element } from "react-scroll";
class Skillsection extends Component {
  render() {
    return (
      <div>
      <Element name="Skills" className="element" />
      <Fullpage className="third" bgcolor={this.props.bgcolor}>
        <h3>{data.sections[1].title}</h3>

        <div className="cards-wrapper">
          {data.sections[1].items.map(eachskill => {
            return (
              <Skillcard skill={eachskill} />
              
            );
          })}
        </div>
      </Fullpage>
      </div>
    );
  }
}

export default Skillsection;
