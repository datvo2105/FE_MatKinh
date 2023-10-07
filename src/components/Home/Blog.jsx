import { useState, useEffect } from "react";
import { getAllBlog } from "../../services/blog.servie";
import { Link } from "react-router-dom";

const Blog = () => {
  const [listBlog, setListBlog] = useState([]);

  useEffect(() => {
    getAllBlog().then((res) => setListBlog(res.data.slice(-2)));
  }, []);

  return (
    <>
      <div className="latest-blog section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="section-header text-center">
                <h2 className="h2">Bài Viết Mới Nhất</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {listBlog.map((blog) => (
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
                        width: "100%",
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
                      <Link className="float-right" to={`/blog/${blog._id}`}>
                        Đọc Bài Viết
                      </Link>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                  <h5>Miễn phí vận chuyển</h5>
                  <span className="sub-text">
                    Miễn phí vận chuyển cho tất cả đơn hàng
                  </span>
                </li>
                <li className="display-table-cell">
                  <i className="icon anm anm-dollar-sign-r"></i>
                  <h5>Hỗ trợ đổi trả</h5>
                  <span className="sub-text">
                    Đảm bảo hoàn tiền trong 30 ngày
                  </span>
                </li>
                <li className="display-table-cell">
                  <i className="icon anm anm-comments-l"></i>
                  <h5>Hỗ trợ trực tuyến</h5>
                  <span className="sub-text">
                    Chúng tôi hỗ trợ trực tuyến 24/7
                  </span>
                </li>
                <li className="display-table-cell">
                  <i className="icon anm anm-credit-card-front-r"></i>
                  <h5>Thanh toán an toàn</h5>
                  <span className="sub-text">
                    Tất cả các khoản thanh toán đều được bảo mật và đáng tin
                    cậy.
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
