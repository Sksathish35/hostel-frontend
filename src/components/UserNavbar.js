import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import "./styles/UserNavbarstyle.css";
//  logined Users navbar
function UserNavbar() {
  const [cookies, removeCookie] = useCookies([]);
  var decoded, id;
  try {
    decoded = jwt_decode(cookies.jwt);
    id = decoded.id;
  } catch (error) {
    console.log(error);
  }

  const [userdetails, setuserdetails] = useState([]);

  useEffect(() => {
    function getDetails() {
      axios
        .get(`http://localhost:3001/profile/${id}`, { withCredentials: true })
        .then((res) => {
          if (res.data.message) {
            setuserdetails({ name: "Admin" });
          } else setuserdetails(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getDetails();
  }, [id]);
  const navigate = useNavigate();
  function Logout() {
    console.log("logout");
    // axios.get("http://localhost:3001/logout").then((res) => {
    //   console.log(res);
    // });
    removeCookie("jwt");
    navigate("/login");
  }

  return (
    <div className="user-navbar">
      <Link to="/" className="nav-logo">
        <h2>VCET</h2>
      </Link>

      <div className="hello">
        <p>
          Hello, {userdetails.name}
          <button className="user-navbar-logout" onClick={Logout}>
            logout
          </button>
        </p>
      </div>
    </div>
  );
}

export default UserNavbar;
