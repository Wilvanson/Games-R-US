import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demo = async (e) => {
    e.preventDefault();
    await dispatch(login("demo@aa.io", "password"));
    return history.push("/")
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
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
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}><h4>{error}</h4></div>
            ))}
          </div>
          <div className="formdiv">
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              required={true}
              onChange={updateEmail}
            />
          </div>
          <div className="formdiv">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              required={true}
              onChange={updatePassword}
            />
            <div className="formdiv">
              <button className="button-white" type="submit">
                Login
              </button>
              <button className="button-white" type="submit" onClick={demo}>
                Demo
              </button>
              <Link className='links' to="/sign-up">
                <h4 className="links">Sign up here</h4>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;