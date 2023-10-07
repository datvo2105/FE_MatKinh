import Banner from "./Banner";
import Collection from "./Collection";
import Category from "./Category";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <Banner />
      <Collection
        title={"Sản Phẩm Mới"}
        desc={
          "Chúng tôi luôn liên tục cập nhật những sản phẩm mới nhất tới cho khách hàng"
        }
        status={"new"}
      />
      <Category />
      <Collection
        title={"Giảm Giá"}
        desc={"Những sản phẩm đang có ưu đãi tốt nhất"}
        status={"sales"}
      />
      <Blog />
    </>
  );
};

export default Home;
