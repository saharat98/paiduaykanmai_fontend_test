import React, { useState, useRef } from "react";
import "./Styles/Home.css";
import { Button, Form } from "react-bootstrap";

import { useForm } from "react-hook-form";

function Home() {
  const [errorMessage, setMessage] = useState(false);
  const [messageData, setMessageData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.verifypassword) {
      setMessage(true);
    } else {
      setMessageData(data);
    }
  };
  const rerestPassword = () => {
    setMessage(false);
  };

  return (
    <>
      <div className="from">
        <h1>Test form and validation</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              {...register("firstname", { required: true })}
              name="firstname"
              placeholder="Please fill First Name"
            ></input>
          </div>
          {errors.firstname && (
            <span style={{ color: "red" }}>Please check the First Name</span>
          )}

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              {...register("lastname", { required: true })}
              name="lastname"
              placeholder=" Please fill Last Name"
            ></input>
          </div>
          {errors.lastname && (
            <span style={{ color: "red" }}>Please check the Last Name</span>
          )}

          <div className="field">
            <label>E-mail</label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="Please fill E-mail"
            ></input>
          </div>
          {errors.email && (
            <span style={{ color: "red" }}>Please check the Email</span>
          )}

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              name="password"
              placeholder="Please fill Password"
            ></input>
          </div>
          {errors.password && (
            <span style={{ color: "red" }}>Please check the Password</span>
          )}

          <div className="field">
            <label>Verify Password</label>
            <input
              type="password"
              {...register("verifypassword", {
                required: true,
              })}
              name="verifypassword"
              placeholder="Please fill Verify Password"
              onChange={rerestPassword}
            ></input>
          </div>

          {errorMessage == true && (
            <span style={{ color: "red" }}>Password not match</span>
          )}
          {errors.verifypassword && (
            <span style={{ color: "red" }}>Please check the Password</span>
          )}

          <div className="field">
            <label>Gender </label>
            <select
              name="gender"
              {...register("gender", {
                required: true,
              })}
            >
              <option value="">Please Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {errors.gender && (
            <span style={{ color: "red" }}>Please select Gender</span>
          )}

          <div style={{margin:'10px'}}>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        <div>
          {messageData && (
            <div>
              Result
              <br />
              Firstname:{messageData.firstname}
              <br />
              Lastname:{messageData.lastname}
              <br />
              Email:{messageData.email}
              <br />
              Gender:{messageData.gender}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
