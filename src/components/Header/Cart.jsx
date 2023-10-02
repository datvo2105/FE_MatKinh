import PropTypes from "prop-types";
import { deleteOutCart, selectorOrder } from "../../features/orderSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Cart = ({ showCart, setShowCart }) => {
  const { orders } = selectorOrder();
  const dispatch = useDispatch();

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
                    <div className="variant-cart">
                      Sizes: {order.size.toUpperCase()}
                    </div>
                    <div className="wrapQtyBtn">
                      <div className="qtyField">
                        <span className="label">Qty:</span>
                        <input
                          type="text"
                          id="Quantity"
                          name="quantity"
                          defaultValue={order.quantity}
                          className="product-form__input qty"
                        />
                      </div>
                    </div>
                    <div className="priceRow">
                      <div className="product-price">
                        <span className="money">$ {order.price}</span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="total">
            <div className="buttonSet text-center">
              <Link to="/cart" className="btn btn-secondary btn--small">
                View Cart
              </Link>
              <Link to="/checkout" className="btn btn-secondary btn--small">
                Checkout
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
  showCart: PropTypes.bool,
  setShowCart: PropTypes.func,
};
