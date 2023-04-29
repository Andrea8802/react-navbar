import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const linkContainerRef = useRef(null);
  const linkListRef = useRef(null);

  useEffect(() => {
    const { height } = linkListRef.current.getBoundingClientRect();
    if (show) {
      linkContainerRef.current.style.height = `${height}px`
    } else {
      linkContainerRef.current.style.height = `0px`;
    }
  }, [show])

  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand">
          <img src={logo} alt="logo" className="nav-logo" />
          <h4>DevBar</h4>
        </div>
        <button className="btn nav-toggler" onClick={() => setShow(!show)}>
          <FaBars className="nav-icon" />
        </button>
      </header>
      <div
        className={`links-container ${show ? "show" : ""}`}
        ref={linkContainerRef}
      >
        <ul className="nav-links" ref={linkListRef}>
          {links.map((el) => (
            <li key={el.id}>
              <a href={el.url} alt={el.text}>
                {el.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="social-links">
        <SocialBar />
      </div>
    </nav >
  );
};

export default Navbar;
