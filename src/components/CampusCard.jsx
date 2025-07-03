import React from "react";
import axios from "axios";
import "./CampusCardStyles.css";
import { Link } from "react-router";

const CampusCard = ({ campus, fetchAllCampuses, students }) => {
  const handleDeleteCampus = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this?");
    if (!confirmed) return;
    try {
      await axios.delete(
        `https://crud-backend-gilt.vercel.app/api/campuses/${campus.id}`
      );
      fetchAllCampuses();
    } catch (error) {
      console.error("Error deleting campus:", error);
    }
  };

  const studentCounter = (campus, students) => {
  let studentCount = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].campusId === campus.id) {
      studentCount += 1;
    }
  }
  return studentCount;
};

  return (
    <div className={"campus-card"}>
      <div className="campus-card-header">
        <h2>{campus.name}</h2>
      </div>
      <div>
        <img
          className="campus-card-image"
          src={campus.imageUrl}
          alt={campus.name}
        />
      </div>
      <div>
        <p>
           {studentCounter(campus,students)} Students
        </p>
      </div>
      <div className="campus-card-header-buttons">
        <Link to={`/campuses/${campus.id}`}>
          <p>🔎View</p>
        </Link>
      </div>
      <div className="delete-campus">
        <p onClick={handleDeleteCampus}>🗑️</p>
      </div>
    </div>
  );
};

export default CampusCard;
