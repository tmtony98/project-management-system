import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddProject() {
  //
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Projects
      </Button>

      <Modal
        size="lg"
        centered
        backdrop="static"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

<div className="row">
    <div className="col-lg-5 d-flex justify-content-center align-items-center">
    <label htmlFor="profilepic">
            <input id="profilepic" style={{display:"none"}} type="file"/>
            <img className="img-fluid " style={{height:"200px",width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="profile image" />
        </label>

    </div>
    <div className="col-lg-7 w-50">
      <input type="text" className="form-control mb-2" placeholder="Project Name"/>
      <input type="text" className="form-control mb-2" placeholder="Languages Used"/>
      <input type="text" className="form-control mb-2" placeholder="Github Link"/>
      <input type="text" className="form-control mb-2" placeholder="Website Link"/>


    </div>      
    <input type="text" className="form-control mx-2 mb-3 w-75 " placeholder="Project Overview"/>


</div>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProject;
