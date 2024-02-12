import React, { useState } from "react";
import "./Styles/Sidebar.css";
import {
  FaIdCard,
  FaCommentDots,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
const StudentSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const listofitems = [
    {
      title: "My profile",
      link: "/user",
      icon: <FaIdCard size={20} />,
    },
    // {
    //   title: "Meal plan",
    //   link: "/Mealplan",
    //   icon: <i class="icons fa-solid fa-bowl-food"></i>,
    // },
    {
      title: "Complaint",
      link: "/Complaints",
      icon: <FaCommentDots size={20} />,
    },
    {
      title: "Fine",
      link: "/Fine",
      icon: <FaFileAlt size={20} />,
    },
  ];
  // ${isOpen ? "open" : ""}
  return (
    <div className={`stud-Sidebar `}>
      <div className="side-hamburger" onClick={toggleSidebar}>
        {isOpen ? (
          <FaTimes size={30} style={{ color: "#000" }} />
        ) : (
          <FaBars size={30} style={{ color: "#fff" }} />
        )}
      </div>
      <ul className={isOpen ? "stud-Sidebar-list active" : "stud-Sidebar-list"}>
        {listofitems.map((val, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
              className="stud-row"
            >
              <div id="stud-icon">{val.icon}</div>
              <div id="stud-title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentSidebar;
