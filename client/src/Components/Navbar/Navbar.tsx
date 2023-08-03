import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";

const Navbar = () => {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > lastScrollTop.current) {
      setIsNavbarVisible(false);
    } else if (pageYOffset < lastScrollTop.current) {
      setIsNavbarVisible(true);
    }
    lastScrollTop.current = pageYOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemStyle = `text-white text-opacity-96 grid place-items-center`;
  return (
    <>
      <nav
        className={`fixed top-0 left-0 -translate-y-72 gap-20 px-20 w-full bg-purple-600 shadow-md transition duration-300 p-4 ${
          isNavbarVisible ? "translate-y-0" : ""
        }`}
      >
        <Container>
          <div className="flex items-center justify-between gap-[20px]">
            <p className="text-[22px] text-white font-bold">logo</p>
            <div className="flex items-center gap-16">
              <Link to={`/`} className={itemStyle} >
                Item 1
              </Link >
              <Link to={`/`} className={itemStyle}>
                Item 2
              </Link >
              <Link to={`/`} className={itemStyle}>
                Item 3
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
