import logo from "./assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="" width="200px" />

        <div className="footer-links">
          {/* NAVIGATION */}
          <div className="footer-column">
            <a href="#about">About Us</a>
            <a href="#shop">Shop</a>
            <a href="#ingredients">Ingredients</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="footer-column">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="">X</a>
          </div>
        </div>

        <div className="footer-info">
          <p>© 2026 Shadow Scoop. All Rights Reserved.</p>
          <p>Fuel the grind. Built for results.</p>
        </div>

        <div className="footer-brand">
          <h1>SHADOW SCOOP</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;