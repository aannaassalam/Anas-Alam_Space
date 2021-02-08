import React, { Component } from "react";
import "./info2.css";
import girl from "../../../../../../assets/girl with tab.png";

export default class Info2 extends Component {
  render() {
    return (
      <div className="info2">
        <div className="left">
          <img src={girl} alt="" />
        </div>
        <div className="right">
          <div className="text">
            <h3>The best design for your studio website</h3>
            <p>
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
              auctor sit ipsum malesuada duis volutpat.
            </p>
            <a href="">Experienced team</a>
          </div>
        </div>
      </div>
    );
  }
}
