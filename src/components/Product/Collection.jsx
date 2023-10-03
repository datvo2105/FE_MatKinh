import { useState, useEffect } from "react";
import { getAllProduct } from "../../services/product.service";
import ProductSlider from "../../layouts/ProductSlider";

const Collection = ({ status }) => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getAllProduct({})
      .then((res) => res.data.record)
      .then((products) => {
        products.forEach((product) => {
          if (product.status.toUpperCase() === status.toUpperCase())
            setListProduct((list) => [...list, product]);
        });
      });
  }, []);

  return (
    <div className="productPageSlider">
      <ProductSlider status={status} listProduct={listProduct} />
    </div>
  );
};

export default Collection;
