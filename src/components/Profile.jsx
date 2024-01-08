import React from "react";

function Profile() {
  return (
    <>
     <div className="div shadow p-4">
     <div className="div d-flex justify-content-between">
        <h2 className="mx-2">My Profile</h2>
        <button className="btn btn-outline-light shadow text-dark ms-auto ">
          <i class="fa-solid fa-check"></i>
        </button>
      </div>
      <div className="div d-flex justify-content-center">
        <label htmlFor="profile">
            <input id="profile" style={{display:"none"}} type="file"/>
            <img className="img-fluid " style={{height:"120px",width:"120px"}} src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="profile image" />
        </label>
      </div>

      <form className="p-4">
        <div class="mb-2">
          <label for="exampleInputusername" class="form-label">
            User Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputusername"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-2">
          <label for="exampleInputusername" class="form-label">
            Github Link
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInp"
          />
        </div>
        <div class="mb-2">
          <label for="exampleInputlink" class="form-label">
            Linkedin Profile
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputlink"
          />
        </div>
      
    
      </form>
     </div>
    </>
  );
}

export default Profile;
