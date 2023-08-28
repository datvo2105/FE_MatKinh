import React from "react";
import Header from "../layouts/Header";
import Content from "../components/Shop/Content";
import Footer from "../layouts/Footer";

const Shop = () => {
  return (
    <div className="template-index belle template-index-belle">
      {/* <div id="pre-loader">
        <img src="assets/images/loader.gif" alt="Loading..." />
      </div> */}
      <div className="pageWapper">
        <Header />
        <Content />
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Shop;
