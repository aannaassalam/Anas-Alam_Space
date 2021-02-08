import React, { Component } from "react";
import "./feature.css";

export default class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <div className="heading">
          <h3>The best design for your studio website</h3>
          <div className="link">
            <a href="">Experienced team</a>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="cards">
          <div className="featureCard">
            <div className="top">
              <h4 className="featureName">Audit</h4>
              <p className="featureDetail">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa. Ac aliquam ac
                volutpat, viverra magna risus.
              </p>
            </div>
            <div className="featureLink">
              <a href="">Experienced team</a>
            </div>
          </div>
          <div className="featureCard">
            <div className="top">
              <h4 className="featureName">Teamwork</h4>
              <p className="featureDetail">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa. Ac aliquam ac
                volutpat, viverra magna risus.
              </p>
            </div>
            <div className="featureLink">
              <a href="">Experienced team</a>
            </div>
          </div>
          <div className="featureCard">
            <div className="top">
              <h4 className="featureName">Create</h4>
              <p className="featureDetail">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa. Ac aliquam ac
                volutpat, viverra magna risus.
              </p>
            </div>
            <div className="featureLink">
              <a href="">Experienced team</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
