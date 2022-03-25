import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session"
import "./Splash.css";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const err = [];
    if(username.length === 0){
      err.push("Must enter a username")
    }
    if(email.length === 0){
      err.push("Must enter a email")
    }
    if(username.length > 40){
      err.push("Must enter a username with less than 40 characters")
    }
    if(email.length > 250){
      err.push("Must enter a email with less than 250 characters")
    }
    if (password !== repeatPassword) {
      err.push("Passwords Must Match");
    }
    setErrors(err);
    if (err.length === 0) {
      const data = await dispatch(
        signUp(
          username,
          email,
          password
        )
      );
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="splash">
      <div>
      <h1>
        Games-R-US
      </h1>
      <p>Welcome to Games-R-Uss where all your gaming need are met</p>
      <img src="https://i.ytimg.com/vi/PwJYXEHGn1U/maxresdefault.jpg"/>

      </div>
      <div>
        <form onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>
                <h4>{error}</h4>
              </div>
            ))}
          </div>
          <div className="formdiv">
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
              placeholder={"Username"}
            ></input>
          </div>
          <div className="formdiv">
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
              placeholder={"Email"}
            ></input>
          </div>
          <div className="formdiv">
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
              required={true}
              placeholder={"Password"}
            ></input>
          </div>
          <div className="formdiv">
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder={"Confirm Password"}
            ></input>
          </div>
          <div className="formdiv">
            <button className="button-white" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <div className="formdiv">
          <Link className='links' to="/login" >
            <h4 className="links"> Login here</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

