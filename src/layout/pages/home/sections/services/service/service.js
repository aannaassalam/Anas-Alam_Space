import React, { Component } from "react";
import "./service.css";
import exclamation from "../../../../../../assets/exclamation.png";
import clock from "../../../../../../assets/clock.png";

export default class Service extends Component {
  render() {
    return (
      <div className="service">
        <p className="heading">DESIGN CONCEPT</p>
        <h2 className="title">The best design for your studio website</h2>
        <p className="description">
          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
          auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
          tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
          a, duis volutpat.
        </p>

        <div className="boxes">
          <div className="box">
            <img src={exclamation} alt="" />
            <div className="text">
              <p className="title2">Design concept</p>
              <p>
                Vitae nulla nunc euismod vel nunc euismod velpretium tellus
                accumsan nulla nunc euismod ve semper.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={clock} alt="" />
            <div className="text">
              <p className="title2">Developing websites</p>
              <p>
                Vitae nulla euismod velpretium tellus accumsan nulla nunc
                euismod ve semper.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={clock} alt="" />
            <div className="text">
              <p className="title2">Design concept</p>
              <p>
                Vitae nulla euismod velpretium tellus accumsan nulla nunc
                euismod ve semper.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={exclamation} alt="" />
            <div className="text">
              <p className="title2">Design concept</p>
              <p className="detail">
                Vitae nulla nunc euismod tellus accumsan vel nunc euismod
                velpretium tellus accumsan nulla nunc euismod ve semper.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
