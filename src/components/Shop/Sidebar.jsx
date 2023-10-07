import { Link } from "react-router-dom";
import Slider from "react-slick";
import Filters from "./Filters";
import { useState, useEffect } from "react";
import { getAllProduct } from "../../services/product.service";
import { priceDiscount } from "../../hooks/Func";

const Sidebar = () => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getAllProduct(params).then((res) => setListProduct(res.data.record));
  }, []);

  const settingSlider = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  return (
    <>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
        <div className="closeFilter d-block d-md-none d-lg-none">
          <i className="icon icon anm anm-times-l"></i>
        </div>
        <div className="sidebar_tags">
          <div className="sidebar_widget">
            <Filters />
            <div className="widget-title">
              <h2>Sản Phẩm Mới</h2>
            </div>
            <div className="widget-content">
              <div className="list list-sidebar-products">
                <div className="grid" style={{ height: 400 }}>
                  <Slider {...settingSlider}>
                    {listProduct.map((product) => {
                      if (product.status.toUpperCase() === "NEW") {
                        return (
                          <div className="grid__item" key={product._id}>
                            <div className="mini-list-item">
                              <div className="mini-view_image">
                                <Link
                                  className="grid-view-item__link"
                                  to={`/product/${product._id}`}
                                >
                                  <img
                                    className="grid-view-item__image"
                                    src={product.images[0]}
                                    style={{ height: 70, objectFit: "cover" }}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div className="details">
                                <Link
                                  className="grid-view-item__title"
                                  to={`/product/${product._id}`}
                                  style={{
                                    fontWeight: 600,
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {product.name}
                                </Link>
                                <div className="grid-view-item__meta">
                                  <span className="product-price__price float-right">
                                    <span
                                      className="money"
                                      style={{
                                        color: "#e95144 ",
                                      }}
                                    >
                                      {priceDiscount(
                                        product.price,
                                        product.discount,
                                      )}{" "}
                                      VND
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar_widget static-banner">
            <img src="../../../public/assets/images/side-banner-2.jpg" alt="" />
          </div>
          <div className="sidebar_widget">
            <div className="widget-title">
              <h2>Thông Tin</h2>
            </div>
            <div className="widget-content">
              <p>
                Luôn mang những sản phẩm mới với giá ưu đãi nhất đến tay khách
                hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

const params = {
  search: "",
  record: [],
  pageIndex: 1,
  limit: 12,
  total: 1,
};
