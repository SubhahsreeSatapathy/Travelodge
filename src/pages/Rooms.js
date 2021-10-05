import React, { useState } from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../Components/RoomContainer";

export const Rooms = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  console.log(isLoggedIn == false);
  if (!isLoggedIn) window.location.href = "/login";
  else {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <RoomContainer />
      </>
    );
  }
};
