import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import your CSS file here

import testimonialProfile1 from "../../Assets/Images/Ellipse 175.png";
import testimonialProfile2 from "../../Assets/Images/testimonialProfile.png";
import testimonialProfile3 from "../../Assets/Images/Ellipse 176.png";
import semicolon from "../../Assets/Images/“.svg";
import whiteSemiColon from "../../Assets/Images/“.png";

const testimonials = [
  {
    img: testimonialProfile1,
    name: "Vishal Singh",
    position: "DM, Bhadohi",
    text:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    semicolon: semicolon,
  },
  {
    img: testimonialProfile1,
    name: "Vishal Singh",
    position: "DM, Bhadohi",
    text:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    semicolon: semicolon,
  },
  {
    img: testimonialProfile1,
    name: "Vishal Singh",
    position: "DM, Bhadohi",
    text:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    semicolon: semicolon,
  },
  {
    img: testimonialProfile1,
    name: "Vishal Singh",
    position: "DM, Bhadohi",
    text:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    semicolon: semicolon,
  },
  {
    img: testimonialProfile2,
    name: "Girish Pati Tripathi",
    position: "Mayor, Ayodhya",
    text:
      "Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.",
    semicolon: whiteSemiColon,
  },
  {
    img: testimonialProfile3,
    name: "Vishwa Bhusan Mishra",
    position: "CEO, SKVT",
    text:
      "Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure",
    semicolon: semicolon,
  },
];

const TestimonialsSection = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide index

  useEffect(() => {
    const $slider = $(sliderRef.current);

    $slider.slick({
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      swipe: false,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
      onBeforeChange: (current, next) => {
        setActiveSlide(next); // Update active slide index before slide change
      },
    });

    // Cleanup to remove slick on component unmount
    return () => {
      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }
    };
  }, []);

  const goToPrev = () => {
    const newIndex =
      activeSlide - 1 >= 0 ? activeSlide - 1 : testimonials.length - 1;
    setActiveSlide(newIndex);
    $(sliderRef.current).slick("slickPrev"); // Navigate to previous slide using slick method
  };

  const goToNext = () => {
    const newIndex =
      activeSlide + 1 < testimonials.length ? activeSlide + 1 : 0;
    setActiveSlide(newIndex);
    $(sliderRef.current).slick("slickNext"); // Navigate to next slide using slick method
  };

  useEffect(() => {
    // Event delegation for handling clicks on slick arrows
    const handleNextClick = () => {
      // Replace with your desired functionality
      goToNext();
      console.log("Next Clicked");
    };

    $('body').on('click', '.slick-next', handleNextClick);

    // Clean up the event handler when the component unmounts
    return () => {
      $('body').off('click', '.slick-next', handleNextClick);
    };
  }, []); // Empty dependency array means this effect runs only once

  useEffect(() => {
    // Event delegation for handling clicks on slick arrows
    const handlePrevClick = () => {
      // Replace with your desired functionality
      goToPrev();
      console.log("Prev Clicked");
    };

    $('body').on('click', '.slick-prev', handlePrevClick);

    // Clean up the event handler when the component unmounts
    return () => {
      $('body').off('click', '.slick-prev', handlePrevClick);
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div className="center">
      <div ref={sliderRef} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-slide testimonialCard ${
              activeSlide === index ? "activeSlide" : ""
            }`}
          >
            <div className="imgBox">
              <img
                className="card-img-round mr-4 testimonialImg"
                src={testimonial.img}
                alt={`${testimonial.name} profile`}
              />
              <div className="imgContentBox">
                <h5>{testimonial.name}</h5>
                <p>{testimonial.position}</p>
              </div>
            </div>
            <p className="testimonial-text testimonialText">
              {testimonial.text}
            </p>
            <img
              className="semicolon"
              src={testimonial.semicolon}
              alt="semicolon"
            />
          </div>
        ))}
      </div>
      {/* Arrow buttons for navigation */}
      <button className="custom-prev" onClick={goToPrev}>Previous</button>
      <button className="custom-next" onClick={goToNext}>Next</button>
    </div>
  );
};

export default TestimonialsSection;
