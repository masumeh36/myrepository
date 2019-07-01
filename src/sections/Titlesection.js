import React, { Component } from "react";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import Fullpage from "../components/Fullpage"
import "./Titlesection.css"
class Titlesection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
        <Fullpage className="first" bgcolor={this.props.bgcolor}>
          <h1 className="title" style={{color:this.props.color}}
           >
          {data.title}</h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map(key => {
              return <SocialIcon url={data.links[key]} />;
            })}
          </div>
        </Fullpage>
     
    );
  }
}

export default Titlesection;
