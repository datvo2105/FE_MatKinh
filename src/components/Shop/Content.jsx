import React from "react";
import Sidebar from "./Sidebar";
import ListProducts from "./ListProducts";

const Content = () => {
  return (
    <>
      <div className="page-content">
        <div className="collection-header">
          <div className="collection-hero">
            <div className="collection-hero__image">
              <img
                className="blur-up lazyload"
                data-src="assets/images/cat-women1.jpg"
                src="assets/images/cat-women1.jpg"
                alt="Women"
                title="Women"
              />
            </div>
            <div className="collection-hero__title-wrapper">
              <h1 className="collection-hero__title page-width">
                Shop Grid 4 Column
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Sidebar/>
            <ListProducts/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
