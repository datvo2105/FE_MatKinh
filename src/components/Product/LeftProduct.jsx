import Slider from "react-slick";
import { Link } from "react-router-dom";

const LeftProduct = ({ product }) => {
  const settingSlider = {
    infinite: true,
    autoplaySpeed: 2500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
      <div className="product-details-img">
        <div className="product-thumb">
          <div id="gallery" className="product-dec-slider-2 product-tab-left">
            <Slider {...settingSlider}>
              {product.images.map((image, index) => {
                if (index != 0)
                  return (
                    <Link
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
                          objectFit: "contain",
                        }}
                        alt=""
                      />
                    </Link>
                  );
              })}
            </Slider>
          </div>
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
              src={product.images[0]}
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
