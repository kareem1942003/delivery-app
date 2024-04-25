import { Col, Container, Row } from "react-bootstrap";
import CommonSection from "../components/UI/Commom-section/CommonSection";

const Contact = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <CommonSection title={"Contact Us"} />
      <section style={{ padding: "30px 0" }}>
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Row>
              <Col lg="12" className="text-center mb-3 ">
                <h2>Write A Message</h2>
              </Col>

              <Col lg="6" md="6">
                <input
                  style={{
                    width: "100%",
                    margin: "5px",
                    padding: "8px 10px",
                    background: "#fde4e4",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  type="text"
                  placeholder="Name"
                />
              </Col>
              <Col lg="6" md="6">
                <input
                  style={{
                    width: "100%",
                    margin: "5px",
                    padding: "8px 10px",
                    background: "#fde4e4",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  type="text"
                  placeholder="Email Address"
                />
              </Col>
              <Col lg="6" md="6">
                <input
                  style={{
                    width: "100%",
                    margin: "5px",
                    padding: "8px 10px",
                    background: "#fde4e4",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  type="text"
                  placeholder="Phone Number"
                />
              </Col>
              <Col lg="6" md="6">
                <input
                  style={{
                    width: "100%",
                    margin: "5px",
                    padding: "8px 10px",
                    background: "#fde4e4",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  type="text"
                  placeholder="Subject"
                />
              </Col>
              <Col lg="12">
                <textarea
                  style={{
                    width: "100%",
                    margin: "5px",
                    padding: "8px 10px",
                    background: "#fde4e4",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  placeholder="Message"
                />
              </Col>
              <Col lg="12" className="text-center">
                <button
                  style={{
                    padding: "5px 10px",
                    border: "none",
                    background: "#df2020",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  Send Message
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
