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
      <div className="solid-border">
        <div className="row border-bottom pb-2">
          <span className="col-12 col-sm-6 cart__subtotal-title">Subtotal</span>
          <span className="col-12 col-sm-6 text-right">
            <span className="money">$ {totalPrice()}</span>
          </span>
        </div>
        <div className="row border-bottom pb-2 pt-2">
          <span className="col-12 col-sm-6 cart__subtotal-title">
            <strong>Grand Total</strong>
          </span>
          <span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right">
            <span className="money">$ {totalPrice()}</span>
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
            I agree with the terms and conditions
          </label>
        </p>
        <button
          type="button"
          className="btn btn--small-wide checkout"
          onClick={handleOrder}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartCheckOut;

CartCheckOut.propTypes = {
  listOrder: PropTypes.array,
};
