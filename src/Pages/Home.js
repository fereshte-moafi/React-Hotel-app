import React from "react";
// import react-router-dom
import { Link } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import FeaturedRooms from "../Components/FeaturedRooms/FeaturedRooms";
// imports components
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";

function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="اتاق های مجلل"
          subtitle="قیمت اتاق های لوکس از ۲۹۹ دلار شروع می شود"
        >
          <Link to="/rooms" className="btn-primary">
            اتاق های ما
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default Home;
