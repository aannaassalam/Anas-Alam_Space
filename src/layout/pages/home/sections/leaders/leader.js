import React, { Component } from "react";
import "./leader.css";
import leader1 from "../../../../../assets/leader1.png";
import leader2 from "../../../../../assets/leader2.png";
import leader3 from "../../../../../assets/leader3.png";
import leader4 from "../../../../../assets/leader4.png";

export default class Leader extends Component {
  render() {
    return (
      <div className="leader">
        <h2>Our leadership</h2>
        <p className="description">
          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
          auctor sit ipsum malesuada a, duis volutpat.
        </p>
        <div className="leaders">
          <div className="leaderCard">
            <img src={leader1} alt="" />
            <div className="nameAndRole">
              <p className="name">Andry Ford</p>
              <p className="role">CEO at Whatever</p>
            </div>
          </div>
          <div className="leaderCard">
            <img src={leader2} alt="" />
            <div className="nameAndRole">
              <p className="name">Andry Ford</p>
              <p className="role">CEO at Whatever</p>
            </div>
          </div>
          <div className="leaderCard">
            <img src={leader3} alt="" />
            <div className="nameAndRole">
              <p className="name">Andry Ford</p>
              <p className="role">CEO at Whatever</p>
            </div>
          </div>
          <div className="leaderCard">
            <img src={leader4} alt="" />
            <div className="nameAndRole">
              <p className="name">Andry Ford</p>
              <p className="role">CEO at Whatever</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
