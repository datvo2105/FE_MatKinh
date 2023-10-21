import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/product.service";
import {
  getSearch,
  getPageIndex,
  getCategoryId,
  getMinPrice,
  getMaxPrice,
  getBrandId,
} from "../../utils/getRegex";
import { Link, useNavigate } from "react-router-dom";
import { priceDiscount, countRating, formatPrice } from "../../hooks/Func";

const Shop = () => {
  const navigate = useNavigate();

  const [initPage, setInitPage] = useState(params);

  const listProduct = initPage.record;
  const totalPage = Math.ceil(initPage.total / initPage.limit);
  const pageIndex = Number(getPageIndex(location.search));
  const categoryId = getCategoryId(location.search);
  const brandId = getBrandId(location.search);
  const search = getSearch(location.search);
  const minPrice = getMinPrice(location.search);
  const maxPrice = getMaxPrice(location.search);

  useEffect(() => {
    getAllProduct({
      pageIndex,
      search,
      categoryId,
      brandId,
      minPrice,
      maxPrice,
    }).then((res) => {
      setInitPage(res.data);
    });
  }, [search, pageIndex, categoryId, brandId, minPrice, maxPrice, totalPage]);

  return (
    <>
      <div className="collection-header">
        <div className="collection-hero">
          <div className="collection-hero__image">
            <img
              className="blur-up lazyload"
              data-src="assets/images/cat-women1.jpg"
              src="../../../public/assets/images/cat-women1.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="collection-hero__title-wrapper">
            <h1 className="collection-hero__title page-width">
              Danh Sách Sản Phẩm
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
            <div className="productList">
              <div className="grid-products grid--view-items">
                <div className="row">
                  {listProduct.map((product) => {
                    return (
                      <div
                        key={product._id}
                        className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                        <div className="product-image">
                          <Link to={`/product/${product._id}`}>
                            <img
                              className="primary blur-up lazyload"
                              data-src={product.images[0]}
                              src={product.images[0]}
                              style={{
                                width: 200,
                                height: 200,
                                objectFit: "cover",
                              }}
                              alt="image"
                              title="product"
                            />
                            <img
                              className="hover blur-up lazyload"
                              data-src={product.images[1]}
                              src={product.images[1]}
                              style={{
                                width: 200,
                                height: 200,
                                objectFit: "cover",
                              }}
                              alt="image"
                              title="product"
                            />
                            <div className="product-labels rectangular">
                              {product.status.toUpperCase() == "DEFAULT" ? (
                                ""
                              ) : (
                                <span
                                  className={`lbl ${
                                    product.status.toUpperCase() == "NEW"
                                      ? "pr-label1"
                                      : "on-sale"
                                  }`}>
                                  {product.status}
                                </span>
                              )}
                              {product.discount > 0 ? (
                                <span className="lbl pr-label2">
                                  -{product.discount}%
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          </Link>
                        </div>

                        <div className="product-details text-center">
                          <div className="product-name">
                            <Link
                              to={`/product/${product._id}`}
                              style={{
                                fontWeight: 600,
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}>
                              {product.name}
                            </Link>
                          </div>
                          <div className="product-price">
                            {product.discount == 0 ? (
                              <span
                                className="price"
                                style={{
                                  color: "#e95144 ",
                                }}>
                                {formatPrice.format(product.price)}
                              </span>
                            ) : (
                              <>
                                <span className="old-price">
                                  {formatPrice.format(product.price)} VND
                                </span>
                                <span className="price">
                                  {formatPrice.format(
                                    priceDiscount(
                                      product.price,
                                      product.discount
                                    )
                                  )}
                                </span>
                              </>
                            )}
                          </div>

                          <div className="product-review">
                            {countRating(product.rate).map((star, index) => (
                              <i className={star} key={index}></i>
                            ))}
                          </div>
                          <ul className="swatches">
                            {product.colors.map((color) => (
                              <li
                                className="swatch medium rounded mx-1"
                                style={{
                                  width: 20,
                                  height: 20,
                                  backgroundColor: `${color}`,
                                }}
                                key={color}></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr className="clear" />
            <div className="pagination">
              <ul>
                {Array.from({ length: totalPage }).map((value, index) => {
                  return (
                    <li
                      key={index}
                      className={`${pageIndex == index + 1 ? "active" : ""}`}>
                      <a
                        type="button"
                        onClick={() => {
                          navigate(
                            `?brandId=${brandId}&categoryId=${categoryId}&minPrice=${minPrice}&maxPrice=${maxPrice}&pageIndex=${
                              index + 1
                            }&search=${search}`
                          );
                        }}
                        style={{ cursor: "pointer" }}>
                        {index + 1}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

const params = {
  search: "",
  record: [],
  pageIndex: 1,
  limit: 12,
  total: 1,
};
