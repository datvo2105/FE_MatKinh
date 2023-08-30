import React from "react";
import Header from "../layouts/Header";
import Product from "../components/Shop/Product";
import Footer from "../layouts/Footer";

const SingleProduct = () => {
  return (
    <div className="template-collection belle">
      <div className="template-index belle template-index-belle">
        {/* <div id="pre-loader">
        <img src="assets/images/loader.gif" alt="Loading..." />
      </div> */}
        <div className="pageWapper">
          <Header />
          <Product />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
