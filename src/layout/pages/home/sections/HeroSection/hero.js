import React, { Component } from "react";
import sliderImage from "../../../../../assets/iwatch hand.png";
import user from "../../../../../assets/eclipse girl1.png";
import "./hero.css";
import Slider from "react-slick";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (prev, next) => {
        this.setState({ currentSlide: next });
      },
      customPaging: (index) => {
        return (
          <button
            className={index <= this.state.currentSlide ? "active" : null}
          >
            {index + 1}
          </button>
        );
      },
    };
    return (
      <div className="hero">
        <div className="left">
          <div className="details">
            <p className="heading">Design Inspiration</p>
            <p className="title">
              Convallis turpis erat tempus, viverra aliquet.
            </p>
            <button type="button">Get in Touch</button>
            <div className="review">
              <p className="text">
                I feel so much less stressed ❤️ as I now know by the book."
              </p>
              <div className="user">
                <img src={user} alt="" />
                <div className="nameAndRole">
                  <p className="name">Andry Ford</p>
                  <p className="role">CEO at Whatever</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Slider {...settings}>
            <div>
              <img src={sliderImage} alt="" />
            </div>
            <div>
              <img src={sliderImage} alt="" />
            </div>
            <div>
              <img src={sliderImage} alt="" />
            </div>
            <div>
              <img src={sliderImage} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
