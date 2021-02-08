import React, { Component } from "react";
import "./info1.css";
import girl1 from "../../../../../../assets/sitting girl.png";
import girl2 from "../../../../../../assets/girl in woods.png";

export default class Info1 extends Component {
  render() {
    return (
      <div className="info1">
        <div className="left">
          <img src={girl1} alt="" />
        </div>
        <div className="right">
          <div className="texts">
            <h2>Requirements gathering and analysis for references.</h2>
            <p>
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
              auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
              tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum
              malesuada a, duis volutpat.
            </p>
          </div>
          <img src={girl2} alt="" />
        </div>
      </div>
    );
  }
}
