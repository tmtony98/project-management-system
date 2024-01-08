import React from "react";
import AddProject from "./AddProject";

function MyProjects() {
  return (
    <>
      <div className="div d-flex border rounded py-3 px-3 shadow justify-content-between">
        <h2>My Projects</h2>
        <div className="projects">
          <AddProject />
        </div>
      </div>
      <div className="mt-4 p-2">
        <div className="d-flex p-1 border rounded ">
          <h4>Project title</h4>
          <div className="project-icons ms-auto">
           <button className="btn"><i class="fa-solid fa-pen-to-square"></i></button>
           <button className="btn"><i class="fa-brands fa-github"></i></button>
           <button className="btn"><i class="fa-solid fa-trash"></i></button>

          
          </div>
        </div>
        <p className="text-danger">No project uploaded</p>
      </div>
    </>
  );
}

export default MyProjects;
