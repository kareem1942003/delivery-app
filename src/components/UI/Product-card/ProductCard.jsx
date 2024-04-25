/* eslint-disable react/prop-types */
// @ts-ignore
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../../Store/shopping-cart/CartSlice";

// @ts-ignore
// eslint-disable-next-line react/prop-types
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id: item.id,
        title: item.title,
        image01: item.image01,
        price: item.price,
      })
    );
  };
  return (
    <div
      style={{
        border: "1px solid #fde4e4",
        textAlign: "center",
        padding: "30px",
        cursor: "pointer",
        borderRadius: "5px",
        transition: "0.3s",
      }}
      className="product__item"
    >
      <div className="product__image">
        <img
          style={{ transition: "0.4s" }}
          // eslint-disable-next-line react/prop-types
          src={item.image01}
          alt=""
          className="img__product w-50"
        />
      </div>
      <div className="product__content">
        <h5 style={{ margin: "10px 0" }}>
          <Link
            style={{
              color: "#212245",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            // eslint-disable-next-line react/prop-types
            to={`/foods/${item.id}`}
          >
            {item.title}
          </Link>
        </h5>
        <div className="d-flex justify-content-between">
          <span
            style={{
              color: "#df2020",
              fontWeight: "600",
              fontSize: "20px",
            }}
            className="product__price"
          >
            ${item.price}
          </span>

          <button
            onClick={() => addToCart()}
            style={{
              background: "#df2020",
              color: "white",
              border: "none",
              padding: "5px 15px",
              borderRadius: "5px",
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
