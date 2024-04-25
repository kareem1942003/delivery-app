import { Col, Container, Row } from "react-bootstrap";
import CommonSection from "../components/UI/Commom-section/CommonSection";
import { SearchRounded } from "@mui/icons-material";

import products from "../assets/fack-data/products";
import ProductCard from "../components/UI/Product-card/ProductCard";
import { useState } from "react";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ paddingTop: "80px" }}>
      <CommonSection title={"All Foods"} />
      <section style={{ padding: "30px 0" }}>
        <Container>
          <Row>
            <Col lg="9" md="9" sm="6">
              <div
                style={{
                  border: "1px solid #fde4e4",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "2px 5px",
                  borderRadius: "5px",
                  margin: "10px",
                }}
                className="search__widget"
              >
                <input
                  style={{ padding: "1px 6px", border: "none" }}
                  type="text"
                  placeholder="i'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <SearchRounded />
                </span>
              </div>
            </Col>
            <Col className="text-end" lg="3" md="3" sm="6">
              <div
                style={{
                  border: "1px solid #fde4e4",
                  padding: "2px 5px",
                  borderRadius: "5px",
                  textAlign: "end",
                  margin: "10px",
                }}
                className="sorting__widget"
              >
                <select style={{ padding: "1px 6px", border: "none" }}>
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {products
              .filter((item) => {
                // @ts-ignore
                if (searchTerm.value === "") {
                  return item;
                }
                if (
                  item.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, i) => (
                <Col className="my-3" key={i} lg="3" md="6" sm="12">
                  <ProductCard item={item} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AllFoods;
