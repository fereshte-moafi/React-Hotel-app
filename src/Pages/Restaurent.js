import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// imports components
import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
import RestaurentContainer from "../Components/RestaurentContainer/RestaurentContainer";

function Restaurent() {
  return (
    <>
      <Hero hero="restaurentHero">
        <Banner title="رستوران">
          <Link to="/" className="btn-primary">
          برگشت به صفحه اصلی
          </Link>
        </Banner>
      </Hero>

      <RestaurentContainer />
    </>
  );
}

export default Restaurent;
