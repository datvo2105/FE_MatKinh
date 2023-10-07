import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllBlog } from "../../services/blog.servie";
import ListProducts from "./ListProducts";

const SingleBlog = () => {
  const [listBlog, setListBlog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAllBlog().then((res) => setListBlog(res.data));
  }, []);

  return (
    <>
      <div className="page section-header text-center mb-0">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">
              {listBlog.map((blog) => {
                if (blog._id == id) return blog.title;
              })}
            </h1>
          </div>
        </div>
      </div>
      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <Link to="/" title="Back to the home page">
            Trang Chủ
          </Link>
          <span aria-hidden="true">›</span>
          <Link to="/blog" title="Back to News">
            Bài Viết
          </Link>
          <span aria-hidden="true">›</span>
          <span>
            {listBlog.map((blog) => {
              if (blog._id == id) return blog.title;
            })}
          </span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
            <div className="blog--list-view">
              {listBlog.map((blog) => {
                if (blog._id == id) {
                  return (
                    <div
                      key={blog._id}
                      className="article"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></div>
                  );
                }
              })}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar ">
            <div className="sidebar_tags">
              <div className="sidebar_widget">
                <div className="widget-title">
                  <h2>Các bài viết khác</h2>
                </div>
                <div className="widget-content">
                  <div className="list list-sidebar-products">
                    <div className="grid">
                      {listBlog.map((blog, index) => {
                        if (index <= 4)
                          return (
                            <div key={blog._id} className="grid__item">
                              <div className="mini-list-item">
                                <div className="mini-view_image">
                                  <Link
                                    className="grid-view-item__link"
                                    to={`/blog/${blog._id}`}
                                  >
                                    <img
                                      className="grid-view-item__image blur-up lazyload"
                                      data-src={blog.image}
                                      src={blog.image}
                                      style={{
                                        height: 70,
                                        width: 70,
                                        objectFit: "cover",
                                      }}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="details">
                                  {" "}
                                  <Link
                                    className="grid-view-item__title"
                                    to={`/blog/${blog._id}`}
                                  >
                                    {blog.title}
                                  </Link>
                                  <div className="grid-view-item__meta">
                                    <span className="article__date">
                                      {blog.subtitle}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <ListProducts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
