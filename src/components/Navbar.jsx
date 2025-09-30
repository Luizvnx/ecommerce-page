import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MDBNavbarNav, MDBNavbarItem, MDBNavbarLink } from "mdb-react-ui-kit";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home"); 
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.pathname !== "/") {
      setActive(location.pathname === "/" ? "home" : location.pathname.replace("/", ""));
    } else {
      setActive("home");
    }
  }, [location.pathname]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (location.pathname === "/") {
        const productsSection = document.getElementById("products");
        const navbarEl = document.querySelector(".navbar-custom");
        const navHeight = navbarEl ? navbarEl.offsetHeight : 80;

        if (productsSection) {
          const trigger = productsSection.getBoundingClientRect().top + window.scrollY - navHeight - 10;
          if (window.scrollY >= trigger) {
            setActive("produtos");
          } else {
            setActive("home");
          }
        } else {
          setActive("home");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);


  const handleProductsClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const section = document.getElementById("products");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToProducts: true } });
    }
  };

  return (
    <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="brand-custom">
          AjuLabs
        </Link>

        <MDBNavbarNav className="nav-links">
          <MDBNavbarItem>
            <MDBNavbarLink
              tag={Link}
              to="/"
              className={`nav-link ${active === "home" ? "active" : ""}`}
            >
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <MDBNavbarLink
              as="a"
              href="#products"
              onClick={handleProductsClick}
              className={`nav-link ${active === "produtos" ? "active" : ""}`}
            >
              Produtos
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <MDBNavbarLink
              tag={Link}
              to="/carrinho"
              className={`nav-link ${location.pathname === "/carrinho" ? "active" : ""}`}
            >
              Carrinho
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <MDBNavbarLink
              tag={Link}
              to="/ajuda"
              className={`nav-link ${location.pathname === "/ajuda" ? "active" : ""}`}
            >
              Ajuda
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <MDBNavbarLink
              tag={Link}
              to="/notfound"
              className={`nav-link ${location.pathname === "/notfound" ? "active" : ""}`}
            >
              NotFound Page teste
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </div>
    </nav>
  );
}
