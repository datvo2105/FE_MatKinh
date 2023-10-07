import { useState, useEffect } from "react";
import { getAllBlog } from "../../services/blog.servie";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Content = () => {
  const [listBlog, setListBlog] = useState([]);

  useEffect(() => {
    getAllBlog().then((res) => setListBlog(res.data));
  }, []);

  const settingSlider = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    className: "blog--list-view blog--grid-load-more",
  };

  return (
    <>
      <div className="page section-header text-center mb-0">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Bài Viết</h1>
          </div>
        </div>
      </div>
      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <Link to="/" title="Back to the home page">
            Trang Chủ
          </Link>
          <span aria-hidden="true">›</span>
          <span>Bài Viết</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
            <div className="widget-content">
              <div className="grid">
                <Slider {...settingSlider}>
                  {listBlog.map((blog) => {
                    return (
                      <div
                        key={blog._id}
                        className="grid__item article d-block"
                      >
                        <Link
                          className="article_featured-image"
                          to={`/blog/${blog._id}`}
                        >
                          <img
                            className="blur-up ls-is-cached lazyloaded"
                            data-src={blog.image}
                            src={blog.image}
                            style={{
                              width: 100 + "%",
                              height: 400,
                              objectFit: "cover",
                            }}
                            alt="It's all about how you wear"
                          />
                        </Link>
                        <h2 className="h3">
                          <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
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
                            Đọc Bài Viết
                            <i
                              className="fa fa-caret-right ml-1"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </p>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
