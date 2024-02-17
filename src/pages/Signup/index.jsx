import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/Firebase";

const Signup = () => {
  const [userInformation, setUserInformation] = useState({});
  const Navigate = useNavigate();

  const inputFields = (key, value) => {
    setUserInformation({ ...userInformation, [key]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const { email, password } = userInformation;

    // sign up new user

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        Navigate("/home")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("you already have an account")
        // ..
      });
  };

  return (
    <>
      <div className="mainContainer">
        <form onSubmit={submitForm} className="form">
          <h1>sign up</h1>
          <Input
            onChange={(e) => inputFields(e.target.id, e.target.value)}
            id="username"
            type="text"
            required={true}
            label="username"
            placeholder="write your username"
          />
          <Input
            onChange={(e) => inputFields(e.target.id, e.target.value)}
            id="email"
            type="email"
            required={true}
            label="email"
            placeholder="write your email"
          />
          <Input
            onChange={(e) => inputFields(e.target.id, e.target.value)}
            id="password"
            type="password"
            required={true}
            label="password"
            placeholder="write your password"
          />
          <div className="formButton">
            <Button type="submit" text="sign up" />
          </div>
          <p>
            Already have an account ? <Link to="/">LogIn</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
