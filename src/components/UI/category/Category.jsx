// @ts-ignore
import categoreImg01 from "../../../assets/images/category-01.png";
// @ts-ignore
import categoreImg02 from "../../../assets/images/category-02.png";
// @ts-ignore
import categoreImg03 from "../../../assets/images/category-03.png";
// @ts-ignore
import categoreImg04 from "../../../assets/images/category-04.png";
import { Container, Row, Col } from "react-bootstrap";

const categoreData = [
  {
    display: "Fast Food",
    imgUrl: categoreImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoreImg02,
  },
  {
    display: "Asian Food",
    imgUrl: categoreImg03,
  },
  {
    display: "Row Meat",
    imgUrl: categoreImg04,
  },
];
const Category = () => {
  return (
    <div>
      <Container>
        <Row>
          {categoreData.map((item, i) => (
            <Col key={i} lg="3" md="6" sm="12">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "10px",
                  transition: "0.3s",
                  margin: "10px 0",
                  padding: "20px",
                  backgroundColor: "#fde4e4",
                }}
                className="categore__item"
              >
                <div className="categore__img">
                  <img src={item.imgUrl} alt="" />
                </div>
                <h6>{item.display}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Category;
