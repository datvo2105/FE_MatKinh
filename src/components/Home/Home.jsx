import React from "react";
import Banner from "./Banner";
import Collection from "./Collection";
import Category from "./Category";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <Banner />
      <Collection
        title={"New"}
        desc={
          "Chúng tôi luôn liên tục cập nhật những sản phẩm mới nhất tới cho khách hàng"
        }
        status={"new"}
      />
      <Category />
      <Collection
        title={"Sales"}
        desc={
          "Chúng tôi luôn liên tục cập nhật những sản phẩm mới nhất tới cho khách hàng"
        }
        status={"sales"}
      />
      <Blog />
    </>
  );
};

export default Home;
