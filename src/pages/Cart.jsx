import { Link } from "react-router-dom";
import { selectorOrder } from "../features/orderSlice";
import { useState } from "react";
import CartList from "../components/Cart/CartList";
import CartCheckOut from "../components/Cart/CartCheckOut";

const Cart = () => {
  const { orders } = selectorOrder();
  const [listOrder, setListOrder] = useState([]);

  const putListOrder = (data) => {
    const orderExist = listOrder.find((order) => order === data);
    const newState = orderExist
      ? listOrder.filter((order) => order !== data)
      : [...listOrder, data];
    setListOrder(newState);
  };

  return (
    <>
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Giỏ Hàng</h1>
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
              <CartList orders={orders} putListOrder={putListOrder} />
              <CartCheckOut listOrder={listOrder} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
