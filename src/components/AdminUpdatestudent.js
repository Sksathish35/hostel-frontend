import { React, useState } from "react";
import axios from "axios";

function AdminUpdatestudent(props) {
  const [userName, setUserName] = useState(props.student.name);
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");
  const [email, setEmail] = useState(props.student.email);
  const [rollno, setRollno] = useState(props.student.rollno);
  const [regno, setRegno] = useState(props.student.regno);
  const [department, setDepartment] = useState(props.student.department);
  const [roomno, setRoomno] = useState(props.student.roomno);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const updateUser = () => {
    axios
      .put(
        `http://localhost:3001/studentcrud/${props.student._id}`,
        {
          name: userName,
          password: password,
          email: email,
          rollno: rollno,
          regno: regno,
          department: department,
          roomno: roomno,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        props.updatestudentTOList(res.data);
        setUserName("");
        setPassword("");
        setConPassword("");
        setEmail("");
        setRollno("");
        setRegno("");
        setDepartment("");
        setRoomno("");

        setSuccess("Student Details updated sucessfully");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };

  return (
    <div className="admin-stu-register">
      <div className="">
        <div className="admin-stu-con-1">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="name"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <label htmlFor="rollno">Roll No:</label>
          <input
            type="text"
            name="rollno"
            placeholder="roll no"
            value={rollno}
            onChange={(e) => {
              setRollno(e.target.value);
            }}
            required
          />
          <label htmlFor="regno">Reg No:</label>
          <input
            type="text"
            name="regno"
            placeholder="Reg No"
            value={regno}
            onChange={(e) => {
              setRegno(e.target.value);
            }}
            required
          />
        </div>
        <div className="admin-stu-con-2">
          <label htmlFor="dept">Department:</label>
          <input
            type="text"
            name="dept"
            placeholder="Department"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
            required
          />
          <label htmlFor="roomNo">Room No:</label>
          <input
            type="text"
            name="roomNo"
            placeholder="Room No"
            value={roomno}
            onChange={(e) => {
              setRoomno(e.target.value);
            }}
            required
          />{" "}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            placeholder="Password"
            value={conpassword}
            onChange={(e) => {
              setConPassword(e.target.value);
            }}
            required
          />
          <p>note : password not needed for update </p>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => {
          if (conpassword !== password) {
            setError("Passwords Does not Match");
          }
          updateUser();
        }}
      >
        Update
      </button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
}

export default AdminUpdatestudent;
