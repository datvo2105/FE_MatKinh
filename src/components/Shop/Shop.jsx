import Sidebar from "./Sidebar";
import ListProducts from "./ListProducts";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/product.service";
import { useLocation } from "react-router-dom";
import { getSearch, getPageIndex } from "../../utils/getRegex";

const Shop = () => {
  const [initPage, setInitPage] = useState({
    search: "",
    record: [],
    pageIndex: 1,
    limit: 12,
    total: 1,
  });
  const [newList, setNewList] = useState({
    search: "",
    record: [],
    pageIndex: 1,
    limit: 12,
    total: 1,
  });

  const location = useLocation();
  const listProduct = initPage.record || newList.record;
  const totalPage = Math.ceil(initPage.total / initPage.limit);
  const pageIndex = Number(getPageIndex(location.search));
  const search = getSearch(location.search);

  useEffect(() => {
    getAllProduct({ pageIndex, search }).then((res) => {
      setNewList(res.data);
    });
  }, [search, pageIndex, totalPage]);

  return (
    <>
      <div className="collection-header">
        <div className="collection-hero">
          <div className="collection-hero__image">
            <img
              className="blur-up lazyload"
              data-src="assets/images/cat-women1.jpg"
              src="../../../public/assets/images/cat-women1.jpg"
              alt="Women"
              title="Women"
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
          <Sidebar setInitPage={setInitPage} />
          <ListProducts
            listProduct={listProduct}
            totalPage={totalPage}
            pageIndex={pageIndex}
            search={search}
          />
        </div>
      </div>
    </>
  );
};

export default Shop;
