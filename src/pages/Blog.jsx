import React from "react";
import Header from "../layouts/Header";
import Content from "../components/Blog/ListBlog";
import Footer from "../layouts/Footer";

const Blog = () => {
  return (
    <>
      <div className="template-collection belle">
        <div className="template-index belle template-index-belle">
          {/* <div id="pre-loader">
        <img src="assets/images/loader.gif" alt="Loading..." />
      </div> */}
          <div className="pageWapper">
            <Header />
            <Content />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
