import { Col, Container, Row } from "react-bootstrap";
import CommonSection from "../components/UI/Commom-section/CommonSection";
import { useSelector } from "react-redux";

const CheckOut = () => {
  // @ts-ignore
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + shippingCost;
  return (
    <div style={{ paddingTop: "100px" }}>
      <CommonSection title={"Checkout"} />
      <section style={{ padding: "30px 0" }}>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 style={{ fontWeight: "bold" }} className="my-3">
                Shipping Address
              </h6>
              <form className="form__checkout">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="text" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="text" placeholder="Country" />
                </div>
                <div>
                  <input type="text" placeholder="City" />
                </div>
                <div>
                  <input type="number" placeholder="Post Code" />
                </div>
              </form>
              <button
                style={{
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                  background: "#df2020",
                  padding: "5px 10px",
                  margin: "10px 0",
                }}
              >
                Payment
              </button>
            </Col>
            <Col lg="4" md="6">
              <div
                className="checkout__card"
                style={{
                  padding: "20px",
                  background: "#fde4e4",
                  borderRadius: "5px",
                }}
              >
                <h6>
                  SubTotal:
                  <span
                    style={{
                      color: "#df2020",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    ${cartTotalAmount}
                  </span>
                </h6>
                <h6
                  style={{ borderBottom: "1px solid #000", padding: "10px 0" }}
                >
                  Shipping:
                  <span
                    style={{
                      color: "#df2020",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    ${shippingCost}
                  </span>
                </h6>
                <h4>
                  Total:
                  <span
                    style={{
                      color: "#df2020",
                      fontWeight: "bold",
                      fontSize: "29px",
                    }}
                  >
                    {" "}
                    ${totalAmount}
                  </span>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CheckOut;
