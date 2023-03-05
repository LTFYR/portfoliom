import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import { HiMinus } from "react-icons/hi";
import { Link } from "react-scroll";

const Banner = () => {
  const [navMenu, setNavMenu] = useState(false);
  const ref = useRef<string | any>("");

  const [menuSize, setMenuSize] = useState("90px");
  const [menuBackground, setMenuBackground] = useState("transparent");

  function handleMenu(e: any) {
    if (e.target.contains(ref.current)) {
      setNavMenu(false);
    }
  }

  const changeMenuScrollBackground = () => {
    window.scrollY > 12
      ? setMenuBackground("#000000")
      : setMenuBackground("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeMenuScrollBackground);
    return () => {
      window.removeEventListener("scroll", changeMenuScrollBackground);
    };
  });
  return (
    <section
      id="banner"
      style={{ height: "800px" }}
      className="w-full text-white relative"
    >
      <Header />
      <div
        style={{ height: "800px" }}
        className="absolute left-0 top-0 w-full bg-black bg-opacity-10"
      >
        <nav
          style={{
            backgroundColor: menuBackground,
            height: menuSize,
            transition: "all 2s",
          }}
          className="w-full px-16 py-6 fixed top-0 z-40 bg-gray-900 bg-opacity-50 flex justify-between items-center"
        >
          <img
            className="w-12 cursor-pointer border-yellow-500 border-2"
            src="/logo.jpg"
            alt=""
          />
          <div
            onClick={() => setNavMenu(true)}
            className="w-8 h-6 group flex flex-col items-center justify-between cursor-pointer"
          >
            <span
              style={{ height: "3px" }}
              className="w-full bg-yellow-500 inline-flex group-hover:w-4 duration-300"
            ></span>
            <span
              style={{ height: "3px" }}
              className="w-full bg-yellow-500 inline-flex"
            ></span>
            <span
              style={{ height: "3px" }}
              className="w-full bg-yellow-500 inline-flex group-hover:w-4 duration-300"
            ></span>
          </div>
        </nav>
        <div className="w-full h-full flex flex-col justify-center items-center px-4 select-none">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-center sm:text-start font-black">
            I'm Lutfiyar Aliyev
          </h1>
          <div className="flex items-center gap-2 md:gap-6 text-base md:text-xl font-bold uppercase bg-yellow-500 px-6 py-3">
            <h2>Developer</h2>
            <HiMinus className="rotate-90 text-2xl" />
            <h2>Designer</h2>
            <HiMinus className="rotate-90 text-2xl" />
            <h2>Engineer</h2>
          </div>
        </div>
      </div>
      {navMenu && (
        <div
          ref={(node) => (ref.current = node)}
          onClick={handleMenu}
          className="w-full h-screen bg-black bg-opacity-50 fixed right-0 top-0 flex justify-end z-50"
        >
          <div className="w-full banners h-full bg-zinc-900 text-white flex items-center justify-center">
            <div className="bannerw80 px-12">
              <div>
                <ul className="flex flex-col gap-3">
                  <Link
                    to="banner"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    onClick={() => setNavMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Home
                    </li>
                  </Link>
                  <Link
                    to="me"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    onClick={() => setNavMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      About
                    </li>
                  </Link>
                  <Link
                    to="offers"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    onClick={() => setNavMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Offers
                    </li>
                  </Link>
                  <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    onClick={() => setNavMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Works
                    </li>
                  </Link>
                  <Link
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    onClick={() => setNavMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Testimonial
                    </li>
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    onClick={() => setNavMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="text-lg font-thin mt-32">
                <p>For any project and job</p>
                <p>
                  or just "Message" -{" "}
                  <span className="font-semibold text-yellow-500">
                    lutfiyar888lutfiyar@gmail.com
                  </span>
                </p>
              </div>
            </div>
            <div className="bannerw20 h-full bannerbl text-center flex items-center justify-center">
              <button
                className="text-3xl font-black text-yellow-500"
                onClick={() => setNavMenu(false)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
