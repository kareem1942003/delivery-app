import CommonSection from "../components/UI/Commom-section/CommonSection";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <CommonSection title={"Register"} />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "20px",
                  margin: "30px 0",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <form className="form">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="User Name" />
                    <input type="text" placeholder="Password" />
                  </form>
                  <button className="addToCart__btn">Login</button>
                </div>
                <h5>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/login"}
                  >
                    Already have an account? Login
                  </Link>
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Register;
