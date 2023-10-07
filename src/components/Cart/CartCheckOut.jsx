import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateToOrder } from "../../features/orderSlice";

const CartCheckOut = ({ listOrder }) => {
  const [isCheck, setIsCheck] = useState(false);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    listOrder.forEach((order) => (total = total + order.price));
    return total;
  };

  const handleOrder = () => {
    listOrder.map(async (order) => {
      const newOrder = { ...order, status: "order" };
      dispatch(updateToOrder({ id: newOrder._id, order: newOrder }));
    });
  };

  return (
    <div className="col-4">
      <div className="solid-border ">
        <div className="row border py-2 ">
          <span className="col-12 col-sm-6 cart__subtotal-title">
            Thành tiền dự kiến
          </span>
          <span className="col-12 col-sm-6 text-right">
            <span className="money">{totalPrice()} VND</span>
          </span>
        </div>
        <div
          className="row border py-2"
          style={{ backgroundColor: "rgb(228, 228, 228)" }}
        >
          <span className="col-12 col-sm-6 cart__subtotal-title">
            <strong>Tổng thành tiền</strong>
          </span>
          <span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right">
            <span className="money">{totalPrice()} VND</span>
          </span>
        </div>
        <div className="paymnet-img">
          <img src="../../public/assets/images/payment-img.jpg" alt="Payment" />
        </div>
        <p className="cart_tearm">
          <label>
            <input
              type="checkbox"
              name="tearm"
              className="checkbox mr-1"
              value={isCheck}
              onChange={() => setIsCheck(!isCheck)}
            />
            Tôi đồng ý với các điều khoản và điều kiện
          </label>
        </p>
        <button
          type="button"
          className="btn btn--small-wide checkout float-right"
          onClick={handleOrder}
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default CartCheckOut;

CartCheckOut.propTypes = {
  listOrder: PropTypes.array,
};
