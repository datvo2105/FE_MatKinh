import { updateToOrder } from "../../features/orderSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatPrice } from "../../hooks/Func";
import { toast } from "react-toastify";

const CartHistory = ({ listOrder }) => {
  const dispatch = useDispatch();

  const handleCancelOrder = (id, order) => {
    const newOrder = { ...order, status: "cancel" };
    dispatch(updateToOrder({ id, newOrder }));
    toast.warn("Bạn vừa hủy đơn hàng");
    location.reload();
  };

  return (
    <form
      method="post"
      className="cart style2 col-12"
      style={{ height: 560, overflowY: "scroll" }}
    >
      <table className="table table-bordered">
        <thead
          className="cart__row cart__header"
          style={{ position: "sticky", top: 0, zIndex: 10 }}
        >
          <tr>
            <th colSpan="2" className="text-center">
              Sản Phẩm
            </th>
            <th className="text-center">Giá</th>
            <th className="text-center">Số Lượng</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-right">Thành Tiền</th>
            <th className="action">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {listOrder.map((order) => {
            return (
              <tr
                key={order._id}
                className="cart__row border-bottom line1 cart-flex border-top"
              >
                <td className="cart__image-wrapper cart-flex-item">
                  <Link to={`/product/${order.product._id}`}>
                    <img
                      className="cart__image"
                      src={order.product.images[0]}
                      style={{
                        height: 100,
                        width: 100,
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </td>
                <td className="cart__meta small--text-left cart-flex-item">
                  <div className="list-view-item__title">
                    <Link to={`/product/${order.product._id}`}>
                      {order.product.name}
                    </Link>
                  </div>

                  <div className="cart__meta-text">
                    <span className="d-flex">
                      Color:
                      <div
                        style={{
                          marginTop: 1,
                          marginLeft: 5,
                          height: 16,
                          width: 30,
                          border: "0.5px solid #333",
                          backgroundColor: order.color,
                        }}
                      ></div>
                    </span>
                    <span className="d-flex mt-1 text-center">
                      Size:
                      <div
                        style={{
                          marginTop: 1,
                          marginLeft: 5,
                          border: "0.5px solid #333",
                          height: 16,
                          width: 30,
                          color: "#000",
                          fontWeight: 800,
                          verticalAlign: "middle",
                        }}
                      >
                        {order.size.toUpperCase()}
                      </div>
                    </span>
                  </div>
                </td>
                <td className="cart__price-wrapper cart-flex-item">
                  <span className="money">
                    {formatPrice.format(order.product.price)}
                  </span>
                </td>
                <td className="cart__update-wrapper cart-flex-item text-right">
                  <div className="cart__qty text-center">
                    <div className="qtyField">
                      <input
                        className="cart__qty-input qty"
                        type="text"
                        id="qty"
                        defaultValue={order.quantity}
                        disabled
                      />
                    </div>
                  </div>
                </td>
                <td className="cart__update-wrapper cart-flex-item text-right">
                  <div className="cart__qty text-center">
                    <div className="qtyField">
                      <span>{order.status.toUpperCase()}</span>
                    </div>
                  </div>
                </td>
                <td className="text-right small--hide cart-price">
                  <div>
                    <span className="money">
                      {formatPrice.format(order.price)}
                    </span>
                  </div>
                </td>
                <td className="text-center small--hide">
                  <button
                    type="button"
                    className="btn btn--secondary cart__remove"
                    title="Remove tem"
                    onClick={() => handleCancelOrder(order._id, order)}
                  >
                    <i className="icon icon anm anm-times-l"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
};

export default CartHistory;

CartHistory.propTypes = {
  listOrder: PropTypes.array,
  putListOrder: PropTypes.func,
};
