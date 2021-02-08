import React, { Component } from "react";
import "./home.css";
import CTA from "./sections/CTA/CTA";
import Hero from "./sections/HeroSection/hero";
import Info from "./sections/info/info";
import Leader from "./sections/leaders/leader";
import NameCarousal from "./sections/nameCarousel/nameCarousal";
import Review from "./sections/review/review";
import Services from "./sections/services/services";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Info />
        <NameCarousal />
        <Services />
        <Leader />
        <Review />
        <CTA />
      </div>
    );
  }
}
