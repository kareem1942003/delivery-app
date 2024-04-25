import Slider from "react-slick";

// @ts-ignore
import ava01 from "../../../assets/images/ava-1.jpg";
// @ts-ignore
import ava02 from "../../../assets/images/ava-2.jpg";
// @ts-ignore
import ava03 from "../../../assets/images/ava-3.jpg";

const SliderTest = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <div style={{ margin: "30px 0", width: "90%" }}>
      <div style={{ width: "100%" }}>
        <Slider {...settings}>
          <div className="customer__div">
            <p className="revew__text text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at,
              ex, voluptas cumque quibusdam suscipit fugiat maxime itaque porro
              blanditiis ipsa voluptatem dolore magni ipsum aspernatur ut
              sapiente a vero.
            </p>
            <div className="imag__customer">
              <img src={ava01} alt="" />
              <h6
                style={{
                  fontWeight: "bold",
                  color: "#df2020",
                  margin: "10px 0",
                }}
              >
                Jhon Doe
              </h6>
            </div>
          </div>
          <div className="customer__div">
            <p className="revew__text text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at,
              ex, voluptas cumque quibusdam suscipit fugiat maxime itaque porro
              blanditiis ipsa voluptatem dolore magni ipsum aspernatur ut
              sapiente a vero.
            </p>
            <div className="imag__customer">
              <img src={ava02} alt="" />
              <h6
                style={{
                  fontWeight: "bold",
                  color: "#df2020",
                  margin: "10px 0",
                }}
              >
                Mitchell Marsh
              </h6>
            </div>
          </div>
          <div className="customer__div">
            <p className="revew__text text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at,
              ex, voluptas cumque quibusdam suscipit fugiat maxime itaque porro
              blanditiis ipsa voluptatem dolore magni ipsum aspernatur ut
              sapiente a vero.
            </p>
            <div className="imag__customer">
              <img src={ava03} alt="" />
              <h6
                style={{
                  fontWeight: "bold",
                  color: "#df2020",
                  margin: "10px 0",
                }}
              >
                Steven Crock
              </h6>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderTest;
