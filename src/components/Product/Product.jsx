import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductSlider from "../../layouts/ProductSlider";
import { getOneProduct } from "../../services/product.service";
import LeftProduct from "./LeftProduct";
import RightProduct from "./RightProduct";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getOneProduct(id).then((res) => setProduct(res.data));
  }, [id]);

  return (
    product && (
      <>
        <div id="MainContent" className="main-content" role="main">
          <div className="bredcrumbWrap">
            <div className="p-2 mt-5"></div>
            <div className="container breadcrumbs">
              <Link to="/" title="Back to the home page">
                Trang Chủ
              </Link>
              <span aria-hidden="true">›</span>
              <span>
                <Link to="/product" title="Back to the home page">
                  Cửa Hàng
                </Link>
                <span aria-hidden="true">›</span>
                <span>
                  <Link to={`/product/${id}`} title="Back to the home page">
                    {product.name}
                  </Link>
                </span>
              </span>
            </div>
          </div>

          <div
            id="ProductSection-product-template"
            className="product-template__container prstyle1 container"
          >
            <div className="product-single" style={{ height: 740 }}>
              <div className="row">
                <LeftProduct product={product} />
                <RightProduct product={product} />
              </div>
            </div>

            <div className="related-product grid-products">
              <header className="section-header">
                <h2 className="section-header__title text-center h2">
                  <span>New</span>
                </h2>
              </header>
              <div className="productPageSlider">
                <ProductSlider status="new" />
              </div>
            </div>
            <div className="prFeatures">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img
                    src="../../../public/assets/images/credit-card.png"
                    alt="Safe Payment"
                    title="Safe Payment"
                  />
                  <div className="details">
                    <h3>Safe Payment</h3>
                    Pay with the world's most payment methods.
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img
                    src="../../../public/assets/images/shield.png"
                    alt="Confidence"
                    title="Confidence"
                  />
                  <div className="details">
                    <h3>Confidence</h3>
                    Protection covers your purchase and personal data.
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img
                    src="../../../public/assets/images/worldwide.png"
                    alt="Worldwide Delivery"
                    title="Worldwide Delivery"
                  />
                  <div className="details">
                    <h3>Worldwide Delivery</h3>
                    FREE &amp; fast shipping to over 200+ countries &amp;
                    regions.
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img
                    src="../../../public/assets/images/phone-call.png"
                    alt="Hotline"
                    title="Hotline"
                  />
                  <div className="details">
                    <h3>Hotline</h3>
                    Talk to help line for your question on 4141 456 789, 4125
                    666 888
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Product;
