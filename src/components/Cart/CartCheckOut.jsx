import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateToOrder } from "../../features/orderSlice";
import { toast } from "react-toastify";
import { totalPrice, formatPrice } from "../../hooks/Func";

const CartCheckOut = ({ listOrder }) => {
  const [isCheck, setIsCheck] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = () => {
    if (listOrder.length > 0) {
      if (isCheck) {
        listOrder.map(async (order) => {
          const newOrder = { ...order, status: "ordered" };
          const id = order._id;
          dispatch(updateToOrder({ id, newOrder: newOrder }));
          toast.success("Đặt hàng thành công");
        });
      } else return toast.error("Vui lòng xác nhận lại đơn hàng");
    } else return toast.warn("Vui lòng chọn sản phẩm để đặt");
  };

  return (
    <div className="col-4">
      <div className="solid-border ">
        <div className="row border py-2 ">
          <span className="col-12 col-sm-6 cart__subtotal-title">
            Thành tiền dự kiến
          </span>
          <span className="col-12 col-sm-6 text-right">
            <span className="money">
              {formatPrice.format(totalPrice(listOrder))}
            </span>
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
            <span className="money">
              {formatPrice.format(totalPrice(listOrder))}
            </span>
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
            Xác nhận đơn hàng
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
