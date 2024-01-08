import React, { useEffect } from "react";
import Header from "../components/Header";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  useEffect(()=>{
    const role = localStorage.getItem("Role")
    if(role!=="user"){
      alert("operation failed, sign in again")
    }
  },[])
  return (
    <>
      <Header/>
      
      <div style={{marginTop:"100px"}} className="text-center">
        <h1 className="p-1">All Projects</h1>
        <div className="d-flex p-2 justify-content-center">
          <input className="form-control w-25" placeholder="Search by Technology" />
          <button className="btn btn-light"><i class="fa-solid mx-1 fa-magnifying-glass"></i></button>
        </div>
        <div className="container p-2 mt-5">
          <Row>
            <Col sm={12} md={6} lg={4} >
            <ProjectCard/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Projects;
