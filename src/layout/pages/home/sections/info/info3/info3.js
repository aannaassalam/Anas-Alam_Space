import React, { Component } from "react";
import "./info3.css";
import watch from "../../../../../../assets/iwatch player.png";

export default class Info3 extends Component {
  render() {
    return (
      <div className="info3">
        <div className="left">
          <div className="text">
            <h3>The best design for your studio website</h3>
            <p>
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
              auctor sit ipsum malesuada duis volutpat.
            </p>
            <a href="">Experienced team</a>
          </div>
        </div>
        <div className="right">
          <img src={watch} alt="" />
        </div>
      </div>
    );
  }
}
