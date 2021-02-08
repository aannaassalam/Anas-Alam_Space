import React, { Component } from "react";
import "./review.css";
import user1 from "../../../../../assets/eclipse girl1.png";
import user2 from "../../../../../assets/eclipse girl2.png";
import vector3 from "../../../../../assets/Vector 3.png";
import vector2 from "../../../../../assets/Vector 2.png";

export default class Review extends Component {
  render() {
    return (
      <div className="reviewSection">
        <div className="reviewTop">
          <p className="text">
            “Every single person comes away and says - wow that's a really slick
            experience, that was so easy to use. I feel so much less stressed as
            I now know we’re doing everything by the book.”
          </p>
          <div className="user">
            <img src={user2} alt="" />
            <div className="nameAndRole">
              <p className="name">Andry Ford</p>
              <p className="role">CEO at Whatever</p>
            </div>
          </div>
        </div>
        <div className="reviewBottom">
          <p className="text">
            I feel so much less stressed ❤️ as I now know we’re doing everything
            by the book.”
          </p>
          <div className="user">
            <img src={user1} alt="" />
            <div className="nameAndRole">
              <p className="name">Andry Ford</p>
              <p className="role">CEO at Whatever</p>
            </div>
          </div>
        </div>
        <img src={vector3} alt="" className="vector2" />
        <img src={vector2} alt="" className="vector3" />
      </div>
    );
  }
}
