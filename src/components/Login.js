import { useState, useEffect, React } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./styles/LoginStyle.css";
function Login() {
  const [cookies] = useCookies([]);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (cookies.jwt) {
    }
  }, [cookies, navigate]);

  const verifyUser = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        setPassword("");
        setEmail("");

        if (res.data.roles === "Admin") {
          navigate("/admin/student-details");
        } else {
          navigate("/user");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };
  return (
    <div className="login">
      <form className="input-container">
        
        <div className="logo-header">
          <div className="logo"><img
          src={"/vw.jpg"}
          className="camu-bg"
          alt="camu-bg"
        /></div>
          <h2>Login</h2>
        </div>
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          name="email"
          placeholder="Registered Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={verifyUser}>Login</button>
        <div className="error-span">
          {error && <p>{error}</p>}
          <span>
            Don't you have an account? <Link to="/register">Register</Link>{" "}
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
