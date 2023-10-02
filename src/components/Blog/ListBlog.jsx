import { useState, useEffect } from "react";
import { getAllBlog } from "../../services/blog.servie";
import { Link } from "react-router-dom";

const Content = () => {
  const [listBlog, setListBlog] = useState([]);

  useEffect(() => {
    getAllBlog().then((res) => setListBlog(res.data));
  }, []);

  return (
    <>
      <div className="page section-header text-center mb-0">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Blog Fullwidth</h1>
          </div>
        </div>
      </div>
      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <Link to="/" title="Back to the home page">
            Home
          </Link>
          <span aria-hidden="true">›</span>
          <span>Blog</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
            <div className="custom-search">
              <form
                method="get"
                className="input-group search-header search"
                role="search"
                style={{ position: "relative" }}
              >
                <input
                  className="search-header__input search__input input-group__field"
                  type="search"
                  name="q"
                  placeholder="Search"
                  aria-label="Search"
                  autoComplete="off"
                />
                <span className="input-group__btn">
                  <button className="btnSearch" type="submit">
                    {" "}
                    <i className="icon anm anm-search-l"></i>{" "}
                  </button>
                </span>
              </form>
            </div>
            <div className="blog--list-view blog--grid-load-more">
              {listBlog.map((blog) => {
                return (
                  <div key={blog._id} className="article d-block">
                    <a className="article_featured-image" href="#">
                      <img
                        className="blur-up ls-is-cached lazyloaded"
                        data-src={blog.image}
                        src={blog.image}
                        style={{ height: 826, objectFit: "cover" }}
                        alt="It's all about how you wear"
                      />
                    </a>
                    <h2 className="h3">
                      <a href="blog-left-sidebar.html">{blog.title}</a>
                    </h2>
                    <ul className="publish-detail">
                      <li>
                        <span
                          className="p-1"
                          style={{
                            backgroundColor: "#ccc",
                            color: "#333",
                            borderRadius: 3,
                          }}
                        >
                          {blog.subtitle}
                        </span>
                      </li>
                    </ul>
                    <p className="d-flex justify-content-end">
                      <Link
                        to={`/blog/${blog._id}`}
                        className="btn btn-secondary btn--small"
                      >
                        Read more
                        <i
                          className="fa fa-caret-right ml-1"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </p>
                  </div>
                );
              })}
              <div className="loadmore-post">
                <a href="#;" className="btn loadMorepost">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
