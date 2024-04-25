/* eslint-disable no-undef */
import { ListGroup } from "react-bootstrap";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../Store/shopping-cart/CartUiSlice";

const Carts = () => {
  const dispatch = useDispatch();
  const toggelCart = () => {
    // @ts-ignore
    dispatch(cartUiActions.toggle());
  };
  // @ts-ignore
  const cartProducts = useSelector((state) => state.cart.cartItems);

  // @ts-ignore
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="cart__container">
      <ListGroup style={{ paddingTop: "100px" }} className="cart">
        <div
          style={{
            width: "100%",
            height: "50px",
            padding: "10px 20px",
          }}
          className="cart__close"
        >
          <span
            onClick={toggelCart}
            style={{
              background: "#000",
              padding: "6px 2.5px",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
            }}
          >
            <CloseRoundedIcon />
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length > 0 ? (
            cartProducts.map((item, i) => <CartItem key={i} item={item} />)
          ) : (
            <h5 className="text-center my-3">No Item added to the cart</h5>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            background: "#df2020",
            height: "12%",
          }}
          className="cart__button"
        >
          <h6 style={{ color: "white" }}>
            subtotal amount:{" "}
            <span style={{ fontWeight: "600" }}>${totalAmount}</span>
          </h6>
          <button
            onClick={toggelCart}
            style={{
              border: "none",
              padding: "5px 20px",
              borderRadius: "5px",
              background: "#fff",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#df2020",
                fontWeight: "bold",
              }}
              to={"/checkout"}
            >
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
