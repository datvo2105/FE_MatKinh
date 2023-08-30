import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Notfound = () => {
  return (
    <div className="template-collection belle">
      <div className="template-index belle template-index-belle">
        {/* <div id="pre-loader">
        <img src="assets/images/loader.gif" alt="Loading..." />
      </div> */}
        <div className="pageWapper">
          <Header />
          <div id="page-content">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="empty-page-content text-center">
                    <h1>404 Page Not Found</h1>
                    <p>The page you requested does not exist.</p>
                    <p>
                      <a
                        href="http://annimexweb.com/"
                        className="btn btn--has-icon-after">
                        Continue shopping{" "}
                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Notfound;
