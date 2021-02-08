import React, { Component } from "react";
import logo from "../../../assets/logo.png";
import "./header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: false,
    };
  }

  render() {
    return (
      <div className="header">
        <img src={logo} alt="" />
        <div
          className="hamburger"
          onClick={() => {
            this.setState({ hamburger: true });
            document.getElementsByTagName("body")[0].style.overflowY = "hidden";
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div
          className={
            this.state.hamburger ? "hamburger-menu active" : "hamburger-menu"
          }
        >
          <i
            className="fas fa-times"
            onClick={() => {
              this.setState({ hamburger: false });
              document.getElementsByTagName("body")[0].style.overflowY = "auto";
            }}
          ></i>
          <a href="">Home</a>
          <a href="">Template</a>
          <a href="">Price</a>
          <a href="">Help</a>
          <button type="button">Get in Touch</button>
        </div>
        <div className="nav">
          <a href="">Home</a>
          <a href="">Template</a>
          <a href="">Price</a>
          <a href="">Help</a>
          <button type="button">Get in Touch</button>
        </div>
      </div>
    );
  }
}
