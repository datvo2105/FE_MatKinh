import React from "react";
import Banner from "./Banner";
import Collection from "./Collection";
import Category from "./Category";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <Banner />
      <Collection />
      <Category />
      <Collection />
      <Blog />
    </>
  );
};

export default Home;
