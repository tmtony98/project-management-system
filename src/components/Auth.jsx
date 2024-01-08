import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../services/allApis";

function Auth({ register }) {
  //js
  const RegisterForm = register? true : false;
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(userData);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      alert("Please fill all the details");
    } else {
      //api call
      const res = await registerApi(userData);
      console.log(res);
      if (res.status === 200) {
        alert(`user ${res.data.username} has registered successfully`);
        //reset state
        setUserData({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        alert(res.response.data);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      alert("Please fill all the details");
    } else {
      const res = await loginApi({email, password });
      console.log(res);
      if (res.status === 200) {
        alert(`user ${res.data.username} has registered successfully`);
        //save res
        localStorage.setItem(
          "existinguser",
          JSON.stringify(res.data.existingUser)
        );
        localStorage.setItem("Role", res.data.role);
        sessionStorage.setItem("token", res.data.token);
        //reset state
        setUserData({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        alert(res.response.data);
      }
    }
  };

  return (
    <>
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center  align-items-center"
      >
        <div className="container d-flex  flex-column justify-content-center  ">
          <Link style={{ textDecoration: "none" }} to={"/"}>
            {" "}
            <div
              style={{ marginLeft: "100px" }}
              className=" p-1 text-primary  "
            >
              <i class="fa-solid mx-2 fa-arrow-left"></i>Back to home
            </div>
          </Link>
          <div
            style={{ width: "65vw", marginLeft: "10%" }}
            className="row  d-flex flex-row justify-content-center  rounded bg-dark"
          >
            <div className="col-lg-6  d-flex justify-content-end px- align-items-center">
              <img
                className="img-fluid"
                style={{
                  height: "400px",
                  borderRadius: "300px",
                  padding: "50px",
                }}
                src="https://i.pinimg.com/564x/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.jpg"
                alt="login/register image"
              />
            </div>
            <div className="col-lg-6 d-flex  align-items-center justify-content-start">
              <Form className="w-75 mt-4">
                {RegisterForm ? (
                  <h1 className="text-light mb-4">Sign Up From</h1>
                ) : (
                  <h1 className="text-light mb-4">Login Form</h1>
                )}
                {RegisterForm ? (
                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label className="text-light">User Name</Form.Label>
                    <Form.Control
                      value={userData.username}
                      onChange={(e) => {
                        setUserData({ ...userData, username: e.target.value });
                      }}
                      type="text"
                      placeholder="Enter User Name"
                    />
                  </Form.Group>
                ) : (
                  " "
                )}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-light">Email address</Form.Label>
                  <Form.Control
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-light">Password</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                {RegisterForm ? (
                  <Button
                    onClick={handleRegister}
                    variant="primary"
                    type="submit"
                  >
                    Register
                  </Button>
                ) : (
                  <Button onClick={handleLogin} variant="primary" type="submit">
                    Login
                  </Button>
                )}
                {RegisterForm ? (
                  <div className="d-flex mb-3 align-items-center ">
                    {" "}
                    <p className="text-danger mt-3 ">Already having Account?</p>
                    <Link className="mb-1 mx-1" to={"/login"}>
                      <a className="">Login now!</a>
                    </Link>
                  </div>
                ) : (
                  <div className="d-flex mt-2 mb-2">
                    {" "}
                    <p className="text-danger mt-2 ">New user?</p>
                    <Link className="p-2" to={"/register"}>
                      {" "}
                      <a className="">Register now!</a>
                    </Link>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
