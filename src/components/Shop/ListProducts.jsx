import { Link, useNavigate } from "react-router-dom";
import { priceDiscount, countRating } from "../../hooks/Func";
import PropTypes from "prop-types";

const ListProducts = ({ listProduct, totalPage, pageIndex, search }) => {
  const navigate = useNavigate();

  const pathChange = (search, index) => {
    const path = `/product?pageIndex=${index + 1}&search=${search}`;
    navigate(path);
  };
  return (
    <>
      <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
        <div className="productList">
          <div className="grid-products grid--view-items">
            <div className="row">
              {listProduct.map((product) => {
                return (
                  <div
                    key={product._id}
                    className="col-6 col-sm-6 col-md-4 col-lg-3 item"
                  >
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
                              }`}
                            >
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

                      <div
                        className="saleTime desktop"
                        data-countdown="2022/03/01"
                      ></div>

                      <form
                        className="variants add"
                        action="#"
                        onClick={(e) => e.preDefault()}
                        method="post"
                      >
                        <button className="btn btn-addto-cart" type="button">
                          Select Options
                        </button>
                      </form>
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
                          }}
                        >
                          {product.name}
                        </Link>
                      </div>
                      <div className="product-price">
                        {product.discount == 0 ? (
                          <span
                            className="price"
                            style={{
                              color: "#e95144 ",
                            }}
                          >
                            $ {product.price}
                          </span>
                        ) : (
                          <>
                            <span className="old-price">$ {product.price}</span>
                            <span className="price">
                              ${priceDiscount(product.price, product.discount)}
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
                            key={color}
                          ></li>
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
            {Array.from({ length: totalPage }).map((value, index) => (
              <li
                key={index}
                className={`${pageIndex == index + 1 ? "active" : ""}`}
              >
                <a
                  type="button"
                  onClick={() => pathChange(search, index)}
                  style={{ cursor: "pointer" }}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListProducts;

ListProducts.propTypes = {
  totalPage: PropTypes.number,
  pageIndex: PropTypes.number,
  search: PropTypes.string,
  listProduct: PropTypes.array,
};
