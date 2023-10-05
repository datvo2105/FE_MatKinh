import { deleteOutCart } from "../../features/orderSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CartList = ({ orders, putListOrder }) => {
  const dispatch = useDispatch();

  const handleDeleteCart = (id) => {
    dispatch(deleteOutCart(id));
  };

  return (
    <form
      method="post"
      className="cart style2 col-8"
      style={{ height: 560, overflowY: "scroll" }}
    >
      <table className="table table-bordered">
        <thead
          className="cart__row cart__header"
          style={{ position: "sticky", top: 0, zIndex: 10 }}
        >
          <tr>
            <th className="text-center"></th>
            <th colSpan="2" className="text-center">
              Sản Phẩm
            </th>
            <th className="text-center">Giá</th>
            <th className="text-center">Số Lượng</th>
            <th className="text-right">Thành Tiền</th>
            <th className="action">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr
                key={order._id}
                className="cart__row border-bottom line1 cart-flex border-top"
              >
                <td className="text-center">
                  <input type="checkbox" onChange={() => putListOrder(order)} />
                </td>
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
                  <span className="money">{order.product.price} VND</span>
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
                <td className="text-right small--hide cart-price">
                  <div>
                    <span className="money">{order.price} VND</span>
                  </div>
                </td>
                <td className="text-center small--hide">
                  <button
                    type="button"
                    className="btn btn--secondary cart__remove"
                    title="Remove tem"
                    onClick={() => handleDeleteCart(order._id)}
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

export default CartList;

CartList.propTypes = {
  orders: PropTypes.array,
  putListOrder: PropTypes.func,
};
