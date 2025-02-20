import React from "react";
import "./Footer.css";
import Container from "../Container/Container";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-heading">
          <h1 className="ft-h1">CONTACT</h1>
          <p className="ft-txt1">We're focused on building brands and a better future.</p>
          <p className="ft-txt2">
            If you'd like to partner with us, we're <span className="highlight">here</span> to talk.
          </p>
        </div>

        <div className="footer-main">
          <div className="footer-column">
            <ul>
              <li>Open Spaces</li>
              <li>GIR</li>
              <li>Letterfolk</li>
              <li>Yield</li>
              <li>Poketo</li>
              <li>Equal Parts</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="footer-column">
            <p>228 Park Ave S.</p>
            <p>New York, NY 10003</p>
            <p>acquisitions@patternbrands.com</p>
          </div>
        </div>
        
      </Container>
      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2025 Pattern Brands</p>
      </div>
    </footer>
  );
};

export default Footer;
