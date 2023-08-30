import React from "react";

const Blog = () => {
  return (
    <>
      <div className="latest-blog section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="section-header text-center">
                <h2 className="h2">Latest From our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrap-blog">
                <a
                  href="blog-left-sidebar.html"
                  className="article__grid-image">
                  <img
                    src="assets/images/blog/post-img1.jpg"
                    alt="It's all about how you wear"
                    title="It's all about how you wear"
                    className="blur-up lazyloaded"
                    style={{
                      width: "272.25px",
                      height: "272.25px",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <div className="article__grid-meta article__grid-meta--has-image">
                  <div className="wrap-blog-inner">
                    <h2 className="h3 article__title">
                      <a href="blog-left-sidebar.html">
                        It's all about how you wear
                      </a>
                    </h2>
                    <span className="article__date">May 02, 2017</span>
                    <div className="rte article__grid-excerpt">
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account...
                    </div>
                    <ul className="list--inline article__meta-buttons">
                      <li>
                        <a href="blog-article.html">Read more</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrap-blog">
                <a
                  href="blog-left-sidebar.html"
                  className="article__grid-image">
                  <img
                    src="assets/images/blog/post-img2.jpg"
                    alt="27 Days of Spring Fashion Recap"
                    title="27 Days of Spring Fashion Recap"
                    className="blur-up lazyloaded"
                    style={{
                      width: "272.25px",
                      height: "272.25px",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <div className="article__grid-meta article__grid-meta--has-image">
                  <div className="wrap-blog-inner">
                    <h2 className="h3 article__title">
                      <a href="blog-right-sidebar.html">
                        27 Days of Spring Fashion Recap
                      </a>
                    </h2>
                    <span className="article__date">May 02, 2017</span>
                    <div className="rte article__grid-excerpt">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab...
                    </div>
                    <ul className="list--inline article__meta-buttons">
                      <li>
                        <a href="blog-article.html">Read more</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="store-feature section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <ul className="display-table store-info">
                <li className="display-table-cell">
                  <i className="icon anm anm-truck-l"></i>
                  <h5>Free Shipping &amp; Return</h5>
                  <span className="sub-text">
                    Free shipping on all US orders
                  </span>
                </li>
                <li className="display-table-cell">
                  <i className="icon anm anm-dollar-sign-r"></i>
                  <h5>Money Guarantee</h5>
                  <span className="sub-text">30 days money back guarantee</span>
                </li>
                <li className="display-table-cell">
                  <i className="icon anm anm-comments-l"></i>
                  <h5>Online Support</h5>
                  <span className="sub-text">
                    We support online 24/7 on day
                  </span>
                </li>
                <li className="display-table-cell">
                  <i className="icon anm anm-credit-card-front-r"></i>
                  <h5>Secure Payments</h5>
                  <span className="sub-text">
                    All payment are Secured and trusted.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
