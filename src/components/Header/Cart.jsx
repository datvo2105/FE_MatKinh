import PropTypes from "prop-types";
import {
  deleteOutCart,
  getOrders,
  selectorOrder,
} from "../../features/orderSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Cart = ({ isAuth, showCart, setShowCart }) => {
  const dispatch = useDispatch();
  const { orders } = selectorOrder();

  useEffect(() => {
    if (isAuth != null) {
      dispatch(getOrders());
    }
  }, [orders]);

  const handleDeleteOutCart = (id) => {
    dispatch(deleteOutCart(id));
  };

  return (
    orders && (
      <div className="site-cart">
        <div
          className="site-header__cart "
          title="Cart"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowCart(!showCart);
          }}
        >
          <i className="icon anm anm-bag-l"></i>
          <span
            id="CartCount"
            className="site-header__cart-count"
            data-cart-render="item_count"
          >
            {orders.length}
          </span>
        </div>
        <div
          id="header-cart"
          className={`block block-cart ${showCart ? "d-block" : "d-none"}`}
        >
          <ul className="mini-products-list">
            {orders.map((order) => {
              return (
                <li key={order._id} className="item">
                  <a className="product-image" href="#">
                    <img
                      src={order.product.images[0]}
                      style={{ width: 70, height: 70, objectFit: "cover" }}
                      title=""
                    />
                  </a>
                  <div className="product-details">
                    <div
                      className="remove"
                      onClick={() => handleDeleteOutCart(order._id)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="anm anm-times-l" aria-hidden="true"></i>
                    </div>
                    <a className="pName" href="cart.html">
                      {order.product.name}
                    </a>
                    <div className="variant-cart my-1">
                      Size: {order.size.toUpperCase()}
                    </div>
                    <div className="variant-cart">
                      Số lượng: {order.quantity}
                    </div>
                    <div className="priceRow mt-2">
                      <span style={{ fontWeight: 600 }}>Total:</span>
                      <div className="product-price ml-1 float-right">
                        <span className="money">{order.price} VND</span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="total pt-2 border-top">
            <div className="buttonSet text-center ">
              <Link
                to="/cart"
                className="btn btn-secondary btn--small "
                style={{ width: "100%" }}
              >
                Giỏ Hàng
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Cart;

Cart.propTypes = {
  isAuth: PropTypes.string,
  showCart: PropTypes.bool,
  setShowCart: PropTypes.func,
};
