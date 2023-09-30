import ProductSlider from "../../layouts/ProductSlider";

const Collection = ({ title, desc, status }) => {
  return (
    <>
      <div className="tab-slider-product section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="section-header text-center">
                <h2 className="h2">{title}</h2>
                <p>{desc}</p>
              </div>
              <div className="tabs-listing">
                <div className="tab_container">
                  <div className="tab_content grid-products d-block">
                    <div className="productSlider">
                      <ProductSlider status={status} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Collection;
