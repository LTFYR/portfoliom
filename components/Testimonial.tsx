import React, { Component, useState } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const [dot, setDot] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDot(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translate(-50%,0)",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          cursor: "pointer",
          color: "white",
          border: "1px gainsboro solid",
        }}
      ></div>
    ),
  };
  return (
    <section
      id="testimonials"
      className="text-white py-40 flex justify-center items-center bg-black overflow-hidden"
    >
      <div className="w-[500px] md:w-[620px] h-60 px-4">
        <div>
          <Slider {...settings}>
            <div>
              <p className="text-xl text-gray-300 text-center leading-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam asperiores fugiat porro sint ea vel molestias aut,
                incidunt debitis placeat mollitia quod quia minus, aspernatur
                odit aliquid laborum temporibus quasi. Nam, ducimus praesentium
                placeat laborum debitis iusto? Id, necessitatibus neque!
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300 text-center leading-8">
                Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent
                fringilla dapibus dignissim. Pellentesque quis quam enim.
                Vestibulum ultrices, leo id suscipit efficitur, odio lorem
                rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a
                nisi pretium, a pretium massa tristique. Nullam in aliquam diam.
                Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed
                efficitur sollicitudin auctor. Quisque nec imperdiet purus, in
                ornare odio. Quisque odio felis, vestibulum et.
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300 text-center leading-8">
                Mauris tempor, orci id pellentesque convallis, massa mi congue
                eros, sed posuere massa nunc quis dui. Integer ornare varius mi,
                in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur
                sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim
                nec, viverra eros. Nunc imperdiet risus leo, in rutrum erat
                dignissim id. Ut rhoncus vestibulum facilisis. Duis et lorem
                vitae ligula cursus venenatis.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
