import { useState, useEffect } from "react";
import ListCategory from "./ListCategory";
import { getAllCategory } from "../../services/product.service";

const Filters = ({ setInitPage }) => {
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    getAllCategory().then((res) => setListCategory(res.data.data));
  }, []);

  return (
    <>
      <ListCategory listCategory={listCategory} setInitPage={setInitPage} />
    </>
  );
};

export default Filters;
