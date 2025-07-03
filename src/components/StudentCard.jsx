import React from "react";
import axios from "axios";
import "./StudentCardStyles.css";
import { Link } from "react-router";

const StudentCard = ({ student, fetchAllStudents }) => {
  const handleDeleteStudent = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this?");
    if (!confirmed) return;
    try {
      await axios.delete(
        `https://crud-backend-gilt.vercel.app/api/students/${student.id}`
      );
      fetchAllStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className={"student-card"}>
      <div className="student-card-header">
          <h2>{student.firstName} {student.lastName}</h2>
      </div>
      <div>
        <img
          className="student-card-image"
          src={student.imageUrl}
          alt={student.firstName}
        />
      </div>
      <div className="student-card-header-buttons">
        <Link to={`/students/${student.id}`}>
            <p>🔎View Profile</p>
        </Link>
        <Link to={`/campuses/${student.campusId}`}>
            <p>🏫View Campus</p>
        </Link>
      </div>
      <div className = "delete-student">
        <p onClick={handleDeleteStudent}>🗑️</p>
      </div>
    </div>
  );
};

export default StudentCard;
