import React from "react";
import Slider from "react-slick";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerData from "./bannerData";
import { useSpring, animated } from "react-spring";

const Banner = () => {
  const [props, set] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
  }));
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4500,
  };
  return (
    <section className="banner_section">
      <animated.div style={props}>
        <Slider className="slider" {...settings}>
          {bannerData.map((element) => {
            const imageUrl = `../../../../images/${element.imageUrl}`;
            return (
              <div
                className="slide"
                /* style={{
                  background: `url(${imageUrl})`,
                  backgroundSize: "cover",
                }} */
              >
                <img id="img" src={imageUrl} alt="" />
                {/* <div className="inner">{element.innerContent}</div> */}
              </div>
            );
          })}
        </Slider>
      </animated.div>
    </section>
  );
};

export default Banner;
