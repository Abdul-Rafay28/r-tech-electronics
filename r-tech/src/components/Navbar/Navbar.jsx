import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(false);

  return (
    <header className={styles.navbar}>

      {/* Hamburger */}
      <div
        className={styles.hamburger}
        onClick={() => {
          setOpen(!open);
          setProducts(false);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Logo */}
      <div className={styles.logoCenter}>R-Tech Electronics</div>

      {/* Overlay */}
      <div
        className={`${styles.menuOverlay} ${open ? styles.activeOverlay : ""}`}
        onClick={() => {
          setOpen(false);
          setProducts(false);
        }}
      ></div>

      {/* Menu */}
      <ul className={`${styles.navMenu} ${open ? styles.activeMenu : ""}`}>

        <li>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        </li>

        {/* PRODUCTS */}
        <li className={styles.productsItem}>
          <button
            className={styles.productsBtn}
            onClick={() => setProducts(!products)}
          >
            Products
          </button>

          {products && (
            <div className={styles.dropdown}>
              <Link to="/products/laptops" onClick={() => { setOpen(false); setProducts(false); }}>Laptops</Link>
              <Link to="/products/gpus" onClick={() => { setOpen(false); setProducts(false); }}>Graphic Cards</Link>
              <Link to="/products/motherboards" onClick={() => { setOpen(false); setProducts(false); }}>Mother Boards</Link>
              <Link to="/products/monitors" onClick={() => { setOpen(false); setProducts(false); }}>Monitors</Link>
              <Link to="/products/desktops/cases" onClick={() => { setOpen(false); setProducts(false); }}>Cases/Desktops</Link>
              <Link to="/products/cooling" onClick={() => { setOpen(false); setProducts(false); }}>Cooling</Link>
            </div>
          )}
        </li>

        <li>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </li>

      </ul>

    </header>
  );
}

export default Navbar;
