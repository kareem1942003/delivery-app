/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";
import CommonSection from "../components/UI/Commom-section/CommonSection";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { cartAction } from "../Store/shopping-cart/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  // @ts-ignore
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const dispatch = useDispatch();

  return (
    <div style={{ paddingTop: "100px" }}>
      <CommonSection title={"Your Cart"} />
      <section style={{ padding: "30px 0" }}>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Cart is empty</h5>
              ) : (
                <div>
                  <table className="table table-bordered">
                    <thead>
                      <tr className="text-center">
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                      {cartItems.map((item, i) => (
                        <Tr item={item} key={i} />
                      ))}
                    </thead>
                  </table>
                </div>
              )}
            </Col>
            <div>
              <h6>
                SubTotal:{" "}
                <span
                  style={{
                    color: "#df2020",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  $
                  {useSelector(
                    (state) =>
                      // @ts-ignore
                      state.cart.totalAmount
                  )}
                </span>
              </h6>
              <p>Taxes and shopping will calculate at checkout</p>
              <div className="d-flex gap-3">
                <button
                  style={{
                    padding: "5px 10px",
                    border: " 1px solid #df2020",
                    borderRadius: "5px",
                    background: "#fff",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#df2020" }}
                    to={"/foods"}
                  >
                    Continue Shopping
                  </Link>
                </button>
                <button
                  style={{
                    border: "none",
                    padding: "5px 10px",
                    background: "#df2020",
                    borderRadius: "5px",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/checkout"}
                  >
                    Checkout
                  </Link>
                </button>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    // @ts-ignore
    dispatch(cartAction.deleteItem(item.id));
  };
  return (
    <tr className="text-center">
      <td>
        <img src={item.image01} alt="" className="image__in__table" />
      </td>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>X{item.quantity}</td>
      <td onClick={deleteItem} style={{ cursor: "pointer" }}>
        <DeleteOutlineOutlined />
      </td>
    </tr>
  );
};

export default Cart;
