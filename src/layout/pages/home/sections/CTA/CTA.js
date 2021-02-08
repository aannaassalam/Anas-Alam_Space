import React, { Component } from "react";
import "./CTA.css";

export default class CTA extends Component {
  render() {
    return (
      <div className="CTA">
        <div className="CTAinner">
          <div className="CTAinfo">
            <h4>All-in-one platform for business</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
              volutpat, viverra magna risus aliquam massa. Ac aliquam ac
              volutpat, viverra magna risus.
            </p>
          </div>
          <button type="button">Get in Touch</button>
        </div>
      </div>
    );
  }
}
