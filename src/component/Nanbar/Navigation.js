import React from "react";
import { Nav } from "react-bootstrap";
import "./Navigation.css";

function Navigation() {
  return (
    <>
      <Nav className="nav-menu">
        <Nav.Link className="nav-link" href="/">
          Home
        </Nav.Link>
        <Nav.Link className="nav-link" href="pokemon">
          Pokemon
        </Nav.Link>
        <Nav.Link className="nav-link" href="Funtion1">
          Funtion1
        </Nav.Link>
        <Nav.Link className="nav-link" href="Funtion2">
          Funtion2
        </Nav.Link>
        <Nav.Link className="nav-link" href="Funtion3">
          Funtion3
        </Nav.Link>
      </Nav>
    </>
  );
}
export default Navigation;
