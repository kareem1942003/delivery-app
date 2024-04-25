/* eslint-disable react/prop-types */
// @ts-nocheck
import { ListGroupItem } from "react-bootstrap";
// @ts-ignore
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { cartAction } from "../../../Store/shopping-cart/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(
      cartAction.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };
  const decreaseItem = () => {
    dispatch(cartAction.removeItem(id));
  };
  const deleteItem = () => {
    dispatch(cartAction.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px 0",
          cursor: "pointer",
        }}
        className="cart__item__info"
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <img src={image01} alt="" />
          <div className="cart__product__info">
            <h6 style={{ color: "#df2020", fontWeight: "bold" }}>{title}</h6>
            <p style={{ display: "flex", gap: "50px" }}>
              {quantity}x{" "}
              <span style={{ color: "#df2020", fontWeight: "bold" }}>
                ${totalPrice}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                background: "#fde4e4",
                padding: "5px 10px",
              }}
            >
              <span onClick={incrementItem}>
                <AddRoundedIcon />
              </span>
              <span>{quantity}</span>
              <span onClick={decreaseItem}>
                <RemoveRoundedIcon />
              </span>
            </div>
          </div>
        </div>
        <span onClick={deleteItem}>
          <CloseRoundedIcon />
        </span>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
