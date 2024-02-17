import React, { useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/Firebase";

const Login = () => {
  const [userInformation, setUserInformation] = useState({});
  const Navigate = useNavigate();

  const inputFields = (key, value) => {
    setUserInformation({ ...userInformation, [key]: value, islogedin: false });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const { email, password } = userInformation;

    // sign in existing user

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Navigate("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("you don,t have an account");
      });
  };

  return (
    <>
      <div className="mainContainer">
        <form onSubmit={submitForm} className="form">
          <h1>log in</h1>
          <Input
            id="email"
            type="email"
            required={true}
            label="email"
            onChange={(e) => inputFields(e.target.id, e.target.value)}
            placeholder="write your email"
          />
          <Input
            id="password"
            onChange={(e) => inputFields(e.target.id, e.target.value)}
            type="password"
            required={true}
            label="password"
            placeholder="write your password"
          />
          <div className="formButton">
            <Button type="submit" text="log in" />
          </div>
          <p>
            Don't have an account ? <Link to="/signup">SignUp</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
