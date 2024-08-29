import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

function Header() {
    // useSelector hook is used to access state avaliable in store
    const wishlist = useSelector((state)=>state.wishlistReducer)
    const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <i style={{ color: "white" }}
           className="fa-solid fa-cart-shopping fa-bounce me-3" ></i>
          <Navbar.Brand style={{ color: "#fff" }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              E-KART
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to={"/cart"}style={{ color: "#fff", textDecoration: "none" }}>
                  CART <Badge bg="secondary" className="ms-1">{cart?.length}</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/wishlist"}style={{ color: "#fff", textDecoration: "none" }}>
                  WISH LIST<Badge bg="secondary" className="ms-1">{wishlist?.length}</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
