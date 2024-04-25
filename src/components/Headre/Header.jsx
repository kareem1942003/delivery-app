import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// @ts-ignore
import logo from "../../assets/images/res-logo.png";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../Store/shopping-cart/CartUiSlice";

const nav_links = [
  {
    dispaly: "Home",
    path: "/home",
  },
  {
    dispaly: "Foods",
    path: "/foods",
  },
  {
    dispaly: "Cart",
    path: "/cart",
  },
  {
    dispaly: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  // @ts-ignore
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const toggelCart = () => {
    // @ts-ignore
    dispatch(cartUiActions.toggle());
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [nav_links]);

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        top: "0px",
        zIndex: "1000000",
      }}
    >
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
          <Link
            style={{ margin: "0 10px" }}
            className="navbar-brand"
            to="/home"
          >
            <Image
              style={{ borderRadius: "50%" }}
              width={35}
              src={logo}
              alt=""
            />
            <h5>Testy Treat</h5>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ display: "flex", gap: "10px" }} className="me-auto">
              {nav_links.map((item, i) => (
                <NavLink
                  style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    margin: "0 10px",
                  }}
                  className={(navClass) =>
                    navClass.isActive ? "active_menu" : "nav__menu"
                  }
                  key={i}
                  to={item.path}
                >
                  {item.dispaly}
                </NavLink>
              ))}
            </Nav>
            <div
              style={{ display: "flex", gap: "15px", margin: "10px" }}
              className="nav__right"
            >
              <span style={{ position: "relative" }} className="cart__icon">
                <a onClick={toggelCart} className="nav-link">
                  <ShoppingCartRoundedIcon
                    style={{ fontSize: "30px", cursor: "pointer" }}
                  />
                </a>
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    backgroundColor: "#df2020",
                    padding: "1px 8px",
                    borderRadius: "50%",
                    fontSize: "15px",
                    color: "white",
                  }}
                  className="catr__badge"
                >
                  {cartProducts.length}
                </span>
              </span>
              <span className="user">
                <Link className="nav-link" to={"/login"}>
                  <AccountCircleRoundedIcon style={{ fontSize: "30px" }} />
                </Link>
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
