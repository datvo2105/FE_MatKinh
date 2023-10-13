import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartHistory from "../components/Cart/CartHistory";
import { getAllOrder } from "../services/order.service";

const History = () => {
  const [historyOrder, setHistoryOrder] = useState([]);

  useEffect(() => {
    getAllOrder().then((res) => {
      const newOrder = res.data.filter((order) => {
        return order.status === "ordered" || order.status === "cancel";
      });
      return setHistoryOrder(newOrder);
    });
  }, []);

  return (
    <>
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Lịch sử mua Hàng</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
            <div className="alert alert-success text-uppercase" role="alert">
              <i className="icon anm anm-truck-l icon-large"></i> &nbsp; Bạn
              được miễn phí vận chuyển!
            </div>
            <Link to="/product" className="btn--link cart-continue">
              <i className="icon icon-arrow-circle-left"></i> Tiếp tục mua hàng
            </Link>
            <div className="row mt-2">
              <CartHistory listOrder={historyOrder} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
