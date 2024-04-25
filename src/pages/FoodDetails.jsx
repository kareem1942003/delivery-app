import { Container, Row, Col } from "react-bootstrap";
import products from "../assets/fack-data/products";
import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/Commom-section/CommonSection";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/UI/Product-card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../Store/shopping-cart/CartSlice";
import { feedBackAction } from "../Store/shopping-cart/FeedBackSlice";
const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const relatedProduct = products.filter(
    (item) => item.category === product.category
  );
  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      cartAction.addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image01: product.image01,
      })
    );
  };
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [yourFeedback, setYourFeedback] = useState("");

  const feedbackData = {
    yourName: yourName,
    yourEmail: yourEmail,
    yourFeedback: yourFeedback,
  };

  const refName = useRef(null);
  const refEmail = useRef(null);
  const refFeedback = useRef(null);
  const addDataToFeedback = (e) => {
    e.preventDefault();
    if (yourName != "" && yourEmail != "" && yourFeedback != "") {
      dispatch(feedBackAction.addToFeedBack(feedbackData));
    }
    refName.current.value = "";
    refEmail.current.value = "";
    refFeedback.current.value = "";
  };

  // @ts-ignore
  const userFeedback = useSelector((state) => state.cartFeedback);

  return (
    <div style={{ paddingTop: "100px" }}>
      <CommonSection title={`product ${id}`} />
      <section style={{ padding: "20px 0" }}>
        <Container>
          <Row>
            <Col lg="2" md="2" sm="3">
              <div className="product__images">
                <div
                  onClick={() => setPreviewImg(product.image01)}
                  className="img__item"
                >
                  <img className="w-50" src={product.image01} alt="" />
                </div>
                <div
                  onClick={() => setPreviewImg(product.image02)}
                  className="img__item"
                >
                  <img className="w-50" src={product.image02} alt="" />
                </div>
                <div
                  onClick={() => setPreviewImg(product.image03)}
                  className="img__item"
                >
                  <img className="w-50" src={product.image03} alt="" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
                className="product__main__img"
              >
                <img
                  className="image__main__in__details"
                  src={previewImg}
                  alt=""
                />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="singel__product__content">
                <h2
                  style={{
                    fontWeight: "bold",
                    color: "#df2020",
                    margin: "10px 0",
                  }}
                >
                  {product.title}
                </h2>
                <span>
                  Price:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                    ${product.price}
                  </span>
                </span>
                <p>
                  Category: <span>{product.category}</span>
                </p>
                <button
                  onClick={addItem}
                  style={{
                    border: "none",
                    background: "#df2020",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    margin: "10px 0",
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div
                style={{ borderBottom: "1px solid #df2020" }}
                className="tabs d-flex align-items-center gap-5 py-2"
              >
                <h6
                  onClick={() => setTab("desc")}
                  className={tab === "desc" ? "tab__active" : ""}
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                  Description
                </h6>
                <h6
                  className={tab === "rev" ? "tab__active" : ""}
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" ? (
                <div style={{ padding: "20px 0" }} className="tab__content">
                  <p>{product.desc}</p>
                </div>
              ) : (
                <div className="tab__form">
                  <form className="form">
                    <div>
                      <input
                        ref={refName}
                        onChange={(e) => setYourName(e.target.value)}
                        type="text"
                        placeholder="  Your Name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        ref={refEmail}
                        onChange={(e) => setYourEmail(e.target.value)}
                        type="text"
                        placeholder="  Your Email"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        ref={refFeedback}
                        onChange={(e) => setYourFeedback(e.target.value)}
                        placeholder="Your Feedback"
                        required
                      />
                    </div>
                    <button
                      onClick={addDataToFeedback}
                      style={{
                        border: "none",
                        background: "#df2020",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        color: "white",
                        width: "fit-content",
                      }}
                    >
                      Submit
                    </button>
                  </form>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    {userFeedback.length > 0 ? (
                      userFeedback.map((user, i) => (
                        <div
                          key={i}
                          style={{
                            border: "1px solid #df2020",
                            padding: "20px",
                            borderRadius: "5px",
                            margin: "10px 0",
                          }}
                          className="review"
                        >
                          <p>Name: {user.yourName}</p>
                          <p>Email: {user.yourEmail}</p>
                          <p>FeedBack: {user.yourFeedback}</p>
                        </div>
                      ))
                    ) : (
                      <h4
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                          margin: "20px 0",
                        }}
                      >
                        No Review, Add Your Review
                      </h4>
                    )}
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h5 style={{ margin: "30px 0", color: "#df2020" }}>
                You might also like
              </h5>
            </Col>
            {relatedProduct.map((item, i) => (
              <Col
                style={{ marginBottom: "30px" }}
                key={i}
                lg="3"
                md="6"
                sm="12"
              >
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FoodDetails;
