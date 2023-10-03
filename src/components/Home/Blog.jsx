import { useState, useEffect } from "react";
import { getAllBlog } from "../../services/blog.servie";
import { Link } from "react-router-dom";

const Blog = () => {
  const [listBlog, setListBlog] = useState([]);

  useEffect(() => {
    getAllBlog().then((res) => setListBlog(res.data));
  }, []);
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
            {listBlog.map((blog, index) => {
              if (index < 2)
                return (
                  <div
                    key={blog._id}
                    className="col-12 col-sm-12 col-md-6 col-lg-6"
                  >
                    <div className="wrap-blog">
                      <Link
                        to={`/blog/${blog._id}`}
                        className="article__grid-image"
                      >
                        <img
                          src={blog.image}
                          alt={blog.subtitle}
                          title={blog.subtitle}
                          className="blur-up lazyloaded"
                          style={{
                            height: 272,
                            objectFit: "cover",
                          }}
                        />
                      </Link>
                      <div className="article__grid-meta article__grid-meta--has-image">
                        <div className="wrap-blog-inner border">
                          <h2 className="h3 article__title">
                            <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                          </h2>
                          <div className="mt-3 rte article__grid-excerpt">
                            {blog.subtitle}
                          </div>
                          <ul className="float-right list--inline article__meta-buttons">
                            <li>
                              <Link to={`/blog/${blog._id}`}>Read more</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
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
