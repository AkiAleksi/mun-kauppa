import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaHome,
  FaBoxOpen,
  FaInfoCircle,
  FaPhone,
  FaLightbulb
} from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          Ledikauppa.fi <FaLightbulb className="lightbulb-icon" />
        </Link>
        <span className="navbar-slogan">
          edullisia LED-tuotteita
        </span>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <FaHome style={{ marginRight: "8px" }} />
            Etusivu
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>
            <FaBoxOpen style={{ marginRight: "8px" }} />
            Tuotteet
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            <FaInfoCircle style={{ marginRight: "8px" }} />
            Tietoa meistä
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            <FaPhone style={{ marginRight: "8px" }} />
            Yhteystiedot
          </NavLink>
        </li>
        <li>
          <Link to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
            <span className="cart-text">Ostoskori</span>
            <span className="cart-icon-wrapper">
              <FaShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </span>
            <span className="cart-price">{totalPrice.toFixed(2)}€</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
