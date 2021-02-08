import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <h4>{this.props.h4}</h4>
        <p>{this.props.text}</p>
        <a href="">Experienced team</a>
      </div>
    );
  }
}
