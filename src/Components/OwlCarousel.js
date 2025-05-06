import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../assets/images/slider.png";
import s2 from "../assets/images/slider1.png";
//import nextIcon from "../assets/images/next-icon.png";
//import prevIcon from "../assets/images/prev-icon.png";

{/****const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      <img src={nextIcon} alt="Next" />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      <img src={prevIcon} alt="Previous" />
    </div>
  );
};********/}

const options = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  
};

const SlickCarousel = () => {
  return (
    <Slider {...options}>
      {[s1, s2, s1, s2, s1, s2, s1, s2, s1, s2, s1, s2].map((image, index) => (
        <div className="slider" key={index}>
          <h3><img src={image} alt={`Banner Image ${index + 1}`} /></h3>
        </div>
      ))}
    </Slider>
  );
};

export default SlickCarousel;