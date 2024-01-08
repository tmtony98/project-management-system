import React from "react";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import quiz from "../assets/quizapp.png";
import { useState } from "react";

function ProjectCard() {
  //

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="shadow mx-2 p-2 btn mb-2" onClick={handleShow}>
        <Card.Body>
          <div className="div d-flex justify-content-center">
            <Card.Img
              style={{ height: "180px", width: "220px" }}
              variant="top"
              src={quiz}
            />
          </div>
          <Card.Title className="p-2 mt-2">Project Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                src={quiz}
                style={{ height: "250px" }}
                className="img-fluid p-3"
                alt="restaurent-image"
              />
            </Col>
            <Col>
              <h2>Project Title</h2>
              <p>project overview</p>
              <p>
                Languages Used :
                <span className="mx-2 fw-bolder">HTML,CSS,React</span>
              </p>
              <a
                target="_blank"
                href="https://github.com/tmtony98/Quiz-app-react-project"
                className="btn btn-lighter shadow"
              >
                Github Link<i class="fa-brands mx-2 fa-github"></i>
              </a>
              <br />
              <a
              target="_blank" href="https://quiz-app-react-project-five.vercel.app/" className="btn btn-lighter mt-2 shadow">
                Live View<i class="fa-solid mx-2 fa-link"></i>
              </a>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className="div"></div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;
