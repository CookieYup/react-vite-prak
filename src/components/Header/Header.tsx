import React from "react";
import Container from "../Container/Container";
import "./Header.css"

const Header: React.FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="nav">
          <ul className="nav-links">
            <li><a href="#" className="">Blog</a></li>
            <li><a href="#" className="">Press</a></li>
            <li><a href="#" className="">Join Us</a></li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
