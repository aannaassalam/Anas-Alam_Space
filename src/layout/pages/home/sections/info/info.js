import React, { Component } from "react";
import "./info.css";
import Info1 from "./info1/info1";
import Info2 from "./info2/info2";
import Info3 from "./info3/info3";

export default class Info extends Component {
  render() {
    return (
      <div className="info">
        <Info1 />
        <Info2 />
        <Info3 />
      </div>
    );
  }
}
