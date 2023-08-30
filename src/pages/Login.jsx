import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Login = () => {
  return (
    <div className="template-collection belle">
      <div className="template-index belle template-index-belle">
        {/* <div id="pre-loader">
        <img src="assets/images/loader.gif" alt="Loading..." />
      </div> */}
        <div className="pageWapper">
          <Header />
            <div id="page-content">
              <div className="page section-header text-center">
                <div className="page-title">
                  <div className="wrapper">
                    <h1 className="page-width">Login</h1>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
                    <div className="mb-4">
                      <form
                        method="post"
                        action="#"
                        id="CustomerLoginForm"
                        acceptCharset="UTF-8"
                        className="contact-form">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                              <label htmlFor="CustomerEmail">Email</label>
                              <input
                                type="email"
                                name="customer[email]"
                                placeholder=""
                                id="CustomerEmail"
                                className=""
                                autoCorrect="off"
                                autoCapitalize="off"
                                autoFocus=""
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                              <label htmlFor="CustomerPassword">Password</label>
                              <input
                                type="password"
                                defaultValue=""
                                name="customer[password]"
                                placeholder=""
                                id="CustomerPassword"
                                className=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                            <input
                              type="submit"
                              className="btn mb-3"
                              value="Sign In"
                            />
                            <p className="mb-4">
                              <a href="#" id="RecoverPassword">
                                Forgot your password?
                              </a>{" "}
                              &nbsp; | &nbsp;
                              <a
                                href="register.html"
                                id="customer_register_link">
                                Create account
                              </a>
                            </p>
                          </div>
                        </div>
                      </form>
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

export default Login;
