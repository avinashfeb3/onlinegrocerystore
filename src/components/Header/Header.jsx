import React, { useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { FaStream } from "react-icons/fa";

export const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    };

    const handleNavHide = () => {
      const navBarLinks = document.querySelectorAll(".nav-link");
      const navCollapse = document.querySelector(".navbar-collapse");
      navBarLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navCollapse.classList.remove("show");
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleNavHide();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
    <header id="full_nav">
      <div className="header">
        <Container>
          <Navbar expand="lg" fixed="top">
            <NavbarBrand>
            <Link className="navbar-brand" to="/">
              <img
                src={Logo}
                alt="Company Logo"
                className="img-fluid"
              />
            </Link>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="main-nav">
              <FaStream />
            </Navbar.Toggle>
            <Navbar.Collapse id="main-nav">
              <Nav className="mx-auto">
                <Nav.Item>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </Nav.Item>
              </Nav>

              <div className="header_right">
                <div className="text-lg-end">
                  <span>Call Us!</span>
                  <span className="phone_no">+91 12345678989</span>
                </div>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </header>
  );
};

export default Header;
