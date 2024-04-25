import { Container } from "react-bootstrap";
// eslint-disable-next-line react/prop-types
const CommonSection = ({ title }) => {
  return (
    <div className="common__section">
      <Container>
        <h2 style={{ fontWeight: "bold", fontSize: "50px", color: "white" }}>
          {title}
        </h2>
      </Container>
    </div>
  );
};

export default CommonSection;
