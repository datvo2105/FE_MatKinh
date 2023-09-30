import { useEffect } from "react";
import Sidebar from "./Sidebar";
import ListProducts from "./ListProducts";
import { useDispatch } from "react-redux";
import { selectorProduct, setListProducts } from "../../features/productSlice";

const Shop = () => {
  const dispatch = useDispatch();
  const { listProduct } = selectorProduct();
  const params = {};

  useEffect(() => {
    dispatch(setListProducts({ params }));
  }, []);

  const priceDiscount = (price, discount) => {
    let newPrice = price;
    return (newPrice = newPrice - (price * discount) / 100);
  };

  return (
    <>
      <div className="collection-header">
        <div className="collection-hero">
          <div className="collection-hero__image">
            <img
              className="blur-up lazyload"
              data-src="assets/images/cat-women1.jpg"
              src="assets/images/cat-women1.jpg"
              alt="Women"
              title="Women"
            />
          </div>
          <div className="collection-hero__title-wrapper">
            <h1 className="collection-hero__title page-width">
              Shop Grid 4 Column
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Sidebar listProduct={listProduct} priceDiscount={priceDiscount} />
          <ListProducts
            listProduct={listProduct}
            priceDiscount={priceDiscount}
          />
        </div>
      </div>
    </>
  );
};

export default Shop;
