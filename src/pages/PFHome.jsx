import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import HomeProject from "../components/HomeProject";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function PFHome() {
  //
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  useEffect(() => {
    if (localStorage.getItem("existinguser")) {
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  });
  return (
    <>
      <div className="container-fluid  bg-dark">
        <Row className="align-items-center p-5">
          <Col className="" sm={12} md={6}>
            <div className="div mx-5 ">
              <h1 className="text-primary mb-4" style={{ fontSize: "70px" }}>
                Project Fair
              </h1>
              <p className="text-light mb-4">
                One Stop Destination For All software Development Projects in
                one and only platform, explore more deep into project fair to
                know more!!
              </p>
              {isLoggedIn ? (
                <Link to={"/dashboard"}>
                  <Button variant="primary mt-2">
                    Manage Your Projects{" "}
                    <i class="fa-solid fa-arrow-right mx-1 fa-fade"></i>
                  </Button>
                </Link>
              ) : (
                <Button variant="primary mt-2">
                  GET STARTED{" "}
                  <i class="fa-solid fa-arrow-right mx-1 fa-fade"></i>
                </Button>
              )}
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img
              className="mx-4 p-3 img-fluid"
              style={{ height: "380px", width: "430px" }}
              src="https://stemettes.org/zine/wp-content/uploads/sites/3/2021/12/custom-erp-software-development.gif"
              alt="project-fair image"
            />
          </Col>
        </Row>
      </div>
      <div className="all-projects mt-5 ">
        <HomeProject />
      </div>
    </>
  );
}

export default PFHome;
