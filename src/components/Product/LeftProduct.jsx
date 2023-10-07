import Slider from "react-slick";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const LeftProduct = ({ product }) => {
  const [mainImg, setMainImg] = useState(product.images[0]);

  const settingSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    pauseOnHover: false,
    verticalSwiping: true,
    swipeToSlide: true,
    className: "product-dec-slider-2 product-tab-left",
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
      <div className="product-details-img">
        <div className="product-thumb">
          <Slider {...settingSlider}>
            {product.images.map((image, index) => {
              if (image != mainImg)
                return (
                  <Link
                    onClick={() => setMainImg(image)}
                    key={index}
                    data-image={image}
                    data-zoom-image={image}
                    className="slick-slide slick-cloned"
                    data-slick-index={index}
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <img
                      className="blur-up lazyload"
                      src={image}
                      style={{
                        width: "100%",
                        height: 90,
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                  </Link>
                );
            })}
          </Slider>
        </div>
        <div className="zoompro-wrap product-zoom-right pl-20">
          <div className="zoompro-span">
            <img
              className="blur-up lazyload zoompro"
              data-zoom-image={product.images[0]}
              alt=""
              style={{
                width: 500,
                height: 730,
                objectFit: "contain",
              }}
              src={mainImg}
            />
          </div>
          <div className="product-labels">
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
              <span className="lbl pr-label2">-{product.discount}%</span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftProduct;

LeftProduct.propTypes = {
  product: PropTypes.object,
};
