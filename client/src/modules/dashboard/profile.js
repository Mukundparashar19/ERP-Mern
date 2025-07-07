import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import axios from 'axios'

const ProfilePage = () => {

    const {id} = useParams()

     const [userProfile, setuserProfile] = useState({})
const getUserProfile = async ()=>{
  await axios.get(`http://localhost:8700/singleuserrecoed/${id}`).then((d)=>{
     setuserProfile(d.data.mydata)
    })
}

useEffect(()=>{
    getUserProfile()
},[])





  return (
    <div className="container text-center py-5 text-light">
      {/* Profile Image */}
      <img
        src={userProfile.profile}
        alt="Profile"
        className="rounded-circle mb-3 border border-3"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderColor: "#0dcaf0",
        }} // Bootstrap "info" color border
      />

      {/* Name and Title */}
      <h2 style={{ color: "#0dcaf0" }}>{userProfile.fullname}</h2>
      <p style={{ color: "#ffc107" }}>{userProfile.email}</p>
      <p style={{ color: "#ffc107" }}>{userProfile.phone}</p>
      <p style={{ color: "#ffc107" }}>{userProfile.dob}</p>

      {/* Social Icons */}
      <div className="mb-4">
        <a
          href="https://github.com/"
          className="me-3"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#f8f9fa" }}
        >
          <FaGithub size={26} />
        </a>
        <a
          href="https://linkedin.com/"
          className="me-3"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0a66c2" }}
        >
          <FaLinkedin size={26} />
        </a>
        <a
          href="mailto:youremail@example.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#d44638" }}
        >
          <FaEnvelope size={26} />
        </a>
      </div>

      {/* About */}
      <p
        className="mx-auto mb-4"
        style={{ maxWidth: "600px", color: "#adb5bd" }}
      >
        Creative developer passionate about crafting visually appealing,
        high-performing web applications. Skilled in React, Node.js, and
        building beautiful interfaces.
      </p>

      {/* Buttons */}
      <div>
        <a
          href="mailto:youremail@example.com"
          className="btn me-2"
          style={{ backgroundColor: "#0dcaf0", color: "#000" }}
        >
          Contact
        </a>
        <a href="#" className="btn btn-outline-warning text-warning">
          Resume
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
