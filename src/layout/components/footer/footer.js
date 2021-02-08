import React, { Component } from "react";
import "./footer.css";
import logo from "../../../assets/logo footer.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="top">
          <div className="left">
            <img src={logo} alt="" />
            <p>
              The best design for your web studio website. Vitae nulla nunc
              euismod vel pretium tellus accumsan semper. Vitae nulla nunc
              euismod vel pretium tellus accumsan semper.
            </p>
          </div>
          <div className="right">
            <div className="nav-links">
              <p>Pages</p>
              <div className="links">
                <p>Templates</p>
                <p>Price</p>
                <p>Help</p>
                <p>Contact</p>
              </div>
            </div>
            <div className="nav-links">
              <p>Demos</p>
              <div className="links">
                <p>Dark theme</p>
                <p>Light theme</p>
                <p>Classic theme</p>
              </div>
            </div>
            <div className="nav-links">
              <p>Resources</p>
              <div className="links">
                <p>Documentation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p className="copyright">&copy; 2019-2020 All Rights Reserved.</p>
          <p>Terms of Service</p>
        </div>
      </div>
    );
  }
}
