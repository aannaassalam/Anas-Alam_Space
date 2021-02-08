import React, { Component } from "react";
import "./services.css";
import Service from "./service/service";
import Feature from "./feature/feature";

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <Service />
        <Feature />
      </div>
    );
  }
}
