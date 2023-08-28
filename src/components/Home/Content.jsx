import React from "react";
import Banner from "./Banner";
import Collection from "./Collection";
import Category from "./Category";
import Blog from "./Blog";

const Content = () => {
  return (
    <>
      <div className="page-content">
        <Banner />
        <Collection />
        <Category />
        <Collection />
        <Blog />
      </div>
    </>
  );
};

export default Content;
