import React from "react";
import Container from "../Container/Container";
import "./Promo.css"

const Promo: React.FC = () => {
  return (
    <section className="promo">
      <Container>
        <div className="promo-text">
          {/* Маленький текст */}
          <p
            className="sm-text"
          >
            BUSINESS thoughts 💭
          </p>

          {/* Большой текст */}
          <h1
            className="lg-text"
          >
            For founders on
            building, growing, and
            selling your brand.
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Promo;
