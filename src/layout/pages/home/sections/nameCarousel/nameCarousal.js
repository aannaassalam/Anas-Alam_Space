import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../../../../components/card/card";
import "./nameCarousal.css";

export default class NameCarousal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          h4: "Name",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
        },
        {
          h4: "Name",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam. ",
        },
        {
          h4: "Name",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat. ",
        },
        {
          h4: "Name",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
        },
        {
          h4: "Name",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
        },
        {
          h4: "Name",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
        },
        {
          h4: "Name",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
        },
        // {
        //   h4: "Name",
        //   text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
        // },
      ],
    };
  }

  render() {
    const settings2 = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.8,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="nameCarousal">
        <div className="heading">
          <p>DESIGN CONCEPT</p>
          <h2>The best design for your studio website</h2>
        </div>
        <div className="slider">
          <Slider {...settings2}>
            {this.state.items.map((item) => (
              <Card h4={item.h4} text={item.text} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
