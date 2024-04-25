import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
// @ts-ignore
import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { FacebookRounded, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#fde4e4",
          padding: "20px",
        }}
        className="footer"
      >
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <div className=" footer__logo text-start">
                <img
                  style={{ borderRadius: "50%" }}
                  width={45}
                  src={logo}
                  alt="logo"
                />
                <h5>Tasty Treat</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt pariatur accusamus
                </p>
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Delivery Time</h5>
              <ListGroup className="deliver__time-list">
                <ListGroupItem
                  style={{ backgroundColor: "#fde4e4" }}
                  className=" delivery__time-item border-0 ps-0"
                >
                  <span>Sunday - Thursday</span>
                  <p>10:00am - 11:00pm</p>
                </ListGroupItem>

                <ListGroupItem
                  style={{ backgroundColor: "#fde4e4" }}
                  className=" delivery__time-item border-0 ps-0"
                >
                  <span>Friday - Saturday</span>
                  <p>Off day</p>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Contact</h5>
              <ListGroup className="deliver__time-list">
                <ListGroupItem
                  style={{ backgroundColor: "#fde4e4" }}
                  className=" delivery__time-item border-0 ps-0"
                >
                  <p>Location: cairo, cairo-3100, Egypt</p>
                </ListGroupItem>
                <ListGroupItem
                  style={{ backgroundColor: "#fde4e4" }}
                  className=" delivery__time-item border-0 ps-0"
                >
                  <span>Phone: 01096106338</span>
                </ListGroupItem>

                <ListGroupItem
                  style={{ backgroundColor: "#fde4e4" }}
                  className=" delivery__time-item border-0 ps-0"
                >
                  <span>Email: example@gmail.com</span>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Newsletter</h5>
              <p>Subscribe our newsletter</p>
              <div
                style={{
                  border: "1px solid #000",
                  padding: "10px",
                  width: "fit-content",
                  borderRadius: "5px",
                }}
                className="newsletter"
              >
                <input
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  type="email"
                  placeholder="Enter your email"
                />
                <span
                  style={{
                    backgroundColor: "#212245",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <SendRoundedIcon />
                </span>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg="6" md="6">
              <p className="copyright__text">
                Copyright - {year}, website made by Muhibur Rahman. All Rights
                Reserved.
              </p>
            </Col>
            <Col lg="6" md="6">
              <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                <p className="m-0">Follow: </p>
                <span>
                  {" "}
                  <Link
                    style={{ color: "#212245" }}
                    to="https://www.facebook.com/profile.php?id=100022210742047"
                  >
                    <FacebookRounded />
                  </Link>{" "}
                </span>

                <span>
                  <Link
                    style={{ color: "#212245" }}
                    to="https://github.com/kareem1942003"
                  >
                    <GitHub />
                  </Link>
                </span>

                <span>
                  {" "}
                  <Link
                    style={{ color: "#212245" }}
                    to="https://www.linkedin.com/in/kareem-mahmoud-644078228/"
                  >
                    <LinkedIn />
                  </Link>{" "}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
