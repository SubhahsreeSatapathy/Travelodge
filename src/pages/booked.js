import React from "react";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";

export default function booked() {
  return (
    <Hero>
      <Banner title="Congrats" subtitle="Your Room is Booked">
        <p>Make payment on your Check In</p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
}
