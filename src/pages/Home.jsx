import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
// @ts-ignore
import heroImage from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";

// @ts-ignore
import featureImg1 from "../assets/images/service-01.png";
// @ts-ignore
import featureImg2 from "../assets/images/service-02.png";
// @ts-ignore
import featureImg3 from "../assets/images/service-03.png";

// @ts-ignore
import foodCategoryimg01 from "../assets/images/hamburger.png";
// @ts-ignore
import foodCategoryimg02 from "../assets/images/pizza.png";
// @ts-ignore
import foodCategoryimg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/Product-card/ProductCard";

import products from "../assets/fack-data/products";
import { useEffect, useState } from "react";

// @ts-ignore
import whyImg from "../assets/images/location.png";
// @ts-ignore
import networkImg from "../assets/images/network.png";
import SliderTest from "../components/UI/Slider/SliderTest";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg1,
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus praesentium",
    Minus: "doloremque",
  },
  {
    title: "Super dine in",
    imgUrl: featureImg2,
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus praesentium",
    Minus: "doloremque",
  },
  {
    title: "Easy Pick up",
    imgUrl: featureImg3,
    decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus praesentium",
    Minus: "doloremque",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products
      .filter((item) => item.category === "Pizza")
      .slice(0, 4);
    setHotPizza(filteredPizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filterProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filterProducts);
    }
    if (category === "PIZZA") {
      const filterProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filterProducts);
    }
    if (category === "BREAD") {
      const filterProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filterProducts);
    }
  }, [category]);

  return (
    <div>
      <section style={{ paddingTop: "100px" }} className="hero__main__content">
        <Container>
          <Row>
            <Col
              style={{ display: "flex", alignItems: "center", padding: "30px" }}
              lg="6"
              md="12"
            >
              <div className="hero__content">
                <h5 className="mb-2">Easy order & fast delivery</h5>
                <h1 style={{ fontWeight: "bold" }} className="mb-4 hero__title">
                  <span style={{ color: "#df2020" }}>Enjoy</span> your favorite
                  Pizza
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus praesentium eos cumque, quod tempore tempora ducimus
                  illo, nam aperiam quos fugiat aliquid distinctio perspiciatis
                  facilis impedit? Ratione dolorem enim voluptatibus.
                </p>
                <div className="d-flex gap-4">
                  <button
                    style={{
                      padding: "10px 30px",
                      border: "none",
                      borderRadius: "5px",
                      transition: "0.3s",
                    }}
                    className="order__btn d-flex align-items-center justify-content-between "
                  >
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/"
                    >
                      Oreder
                    </Link>
                  </button>
                  <button
                    style={{
                      padding: "10px 30px",
                      border: "1px solid #df2020",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      transition: "0.3s",
                    }}
                    className="seeAll__btn d-flex align-items-center justify-content-between "
                  >
                    <Link
                      style={{ textDecoration: "none", color: "#df2020" }}
                      to="/foods"
                    >
                      See All Foos
                    </Link>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="hero__image"
              >
                <img src={heroImage} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Category />
      </section>
      <section style={{ padding: "30px 0" }}>
        <Container>
          <Row>
            <Col lg="12" md="12" sm="12" className="text-center">
              <h5 style={{ color: "#df2020" }} className="featur__subTitle">
                {" "}
                What We Serve
              </h5>
              <h2 style={{ fontWeight: "bold" }} className="featur__title">
                {" "}
                Just sit back at home
              </h2>
              <h2 style={{ fontWeight: "bold" }} className="featur__title">
                {" "}
                we will <span style={{ color: "#df2020" }}>take care</span>
              </h2>
              <p style={{ padding: " 0 30px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident earum nam, porro accusantium{" "}
              </p>
            </Col>

            {featureData.map((item, i) => (
              <Col lg="4" md="6" sm="12" key={i}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  className="feature__item"
                >
                  <img width={100} src={item.imgUrl} alt="" />
                  <h5
                    style={{
                      color: "#df2020",
                      fontWeight: "bold",
                      margin: "5px 0",
                    }}
                  >
                    {item.title}
                  </h5>
                  <p style={{ textAlign: "center", color: "#777" }}>
                    {item.decs}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category">
                <button
                  onClick={() => setCategory("ALL")}
                  className={category === "ALL" ? "foodBtnActive" : ""}
                >
                  All
                </button>
                <button
                  className={category === "BURGER" ? "foodBtnActive" : ""}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryimg01} alt="" />
                  Burger
                </button>
                <button
                  className={category === "PIZZA" ? "foodBtnActive" : ""}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryimg02} alt="" />
                  Pizaa
                </button>
                <button
                  className={category === "BREAD" ? "foodBtnActive" : ""}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryimg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item, i) => (
              <Col key={i} lg="3" md="4" sm="6" className="mb-3">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row style={{ margin: "40px 0" }}>
            <Col lg="6" md="12">
              <div className="location__img">
                <img src={whyImg} alt="" />
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="why__testy-treat">
                <h2>Why Testy Treat?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  provident tempora temporibus ullam aliquam earum vero
                  voluptatem suscipit optio, blanditiis architecto ipsa commodi
                  aliquid corporis assumenda quidem, laudantium dolorem
                  incidunt!
                </p>
                <ListGroup style={{ margin: "20px 0" }}>
                  <ListGroupItem>
                    <p style={{ fontWeight: "600", color: "#df2020" }}>
                      Fresh And Testy Foods
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas, quibusdam. Autem facilis quaerat accusamus
                      repellendus cupiditate eum sunt illo quia, nemo
                      blanditiis. Impedit qui architecto totam vero sequi aut
                      porro?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p style={{ fontWeight: "600", color: "#df2020" }}>
                      Quality Support Foods
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laboriosam, at rerum aliquid eius voluptas modi ipsa! Eius
                      obcaecati porro recusandae, voluptates aliquam quas,
                      atque, accusamus ab reiciendis quo eum omnis.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p style={{ fontWeight: "600", color: "#df2020" }}>
                      Order From Any Location
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt maxime facilis ut eligendi quod vitae accusantium
                      eaque ullam alias quidem ipsa perferendis, laborum illum
                      quibusdam eveniet porro? Sit, numquam nulla.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="text-center mb-5 ">Hot Pizza</h2>
            </Col>
            {hotPizza.map((item, i) => (
              <Col className="mb-3" lg="3" md="4" key={i}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section style={{ padding: "30px 0" }}>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div>
                <h5 style={{ color: "#df2020" }}>TestImonial</h5>
                <h2 style={{ fontWeight: "bold" }}>
                  What our <span style={{ color: "#df2020" }}>Customers</span>{" "}
                  are sayinf
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias voluptatem non laborum eveniet odit ut sed ducimus
                  recusandae distinctio ullam deleniti dicta exercitationem
                  tempore vitae, modi sunt aperiam nam explicabo?
                </p>
                <SliderTest />
              </div>
            </Col>
            <Col lg="6" md="12" sm="12">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="netWork__img"
              >
                <img src={networkImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
