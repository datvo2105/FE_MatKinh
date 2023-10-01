import { Link } from "react-router-dom";
import { priceDiscount, countRating } from "../../hooks/Func";

const ListProducts = ({ listProduct }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
        <div className="productList">
          <button
            type="button"
            className="btn btn-filter d-block d-md-none d-lg-none"
          >
            Product Filters
          </button>
          <div className="toolbar">
            <div className="filters-toolbar-wrapper">
              <div className="row">
                <div className="col-12 ">
                  <div className="filters-toolbar__item">
                    <label htmlFor="SortBy" className="hidden">
                      Sort
                    </label>
                    <select
                      name="SortBy"
                      id="SortBy"
                      defaultValue={"title-ascending"}
                      className="filters-toolbar__input filters-toolbar__input--sort float-right"
                    >
                      <option value="title-ascending">Sort</option>
                      <option>Best Selling</option>
                      <option>Alphabetically, A-Z</option>
                      <option>Alphabetically, Z-A</option>
                      <option>Price, low to high</option>
                      <option>Price, high to low</option>
                      <option>Date, new to old</option>
                      <option>Date, old to new</option>
                    </select>
                    <input
                      className="collection-header__default-sort"
                      type="hidden"
                      value="manual"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                      <div className="button-set">
                        <a
                          href="event.preDefault()"
                          title="Quick View"
                          className="quick-view-popup quick-view"
                          data-toggle="modal"
                          data-target="#content_quickview"
                        >
                          <i className="icon anm anm-search-plus-r"></i>
                        </a>
                        <div className="wishlist-btn">
                          <a
                            className="wishlist add-to-wishlist"
                            href="#"
                            title="Add to Wishlist"
                          >
                            <i className="icon anm anm-heart-l"></i>
                          </a>
                        </div>
                        <div className="compare-btn">
                          <a
                            className="compare add-to-compare"
                            href="compare.html"
                            title="Add to Compare"
                          >
                            <i className="icon anm anm-random-r"></i>
                          </a>
                        </div>
                      </div>
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
                    <div className="timermobile">
                      <div
                        className="saleTime desktop"
                        data-countdown="2022/03/01"
                      ></div>
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
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li className="next">
              <a href="#">
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
