import React from "react";
import Header from '../components/Header'
import MyProjects from "../components/MyProjects";
import Profile from "../components/Profile";



function Dashboard() {
  return (
    <>
    <Header isDashboard={true} />
      <div style={{marginTop:"90px"}} className="container-fluid ">
        <h3>Welcome <span> User</span></h3>
        <div className="row">
          <div className="col-lg-8 p-5 col-md-6">
            {/* project section */}
            <MyProjects/>
          </div>
          <div style={{height:""}} className="col-lg-4 col-md-6 px-3">
           {/* profile section */}
          <Profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
