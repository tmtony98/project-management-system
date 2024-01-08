import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header( {isDashboard}) {
  return (
    <>
      <Navbar className="bg-black w-100 position-fixed top-0  ">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              {" "}
              <h4 className="text-light">
                <i class="fa-solid mx-2 fa-sheet-plastic"></i>
                React Bootstrap
              </h4>
            </Link>
          </Navbar.Brand>
          {
            isDashboard? <button className="btn btn-outline-danger">Log Out</button>
          :""}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
