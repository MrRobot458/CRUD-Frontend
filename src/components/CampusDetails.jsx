import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CampusDetailsStyles.css";
import StudentInCampusCard from "./StudentInCampusCard";

const CampusDetails = ({ students, fetchAllStudents }) => {
  const { campusId } = useParams();
  const [campus, setCampus] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState("");

  const fetchCampus = async () => {
    try {
      const response = await axios.get(
        `https://crud-backend-gilt.vercel.app/api/campuses/${campusId}`
      );
      setCampus(response.data);
    } catch (error) {
      console.error("Error fetching campus:", error);
    }
  };

  useEffect(() => {
    fetchCampus();
  }, [campusId]);

  const handleAddStudentToCampus = async (event) => {
    event.preventDefault();
    if (!selectedStudentId) return;
    try {
      await axios.patch(
        `https://crud-backend-gilt.vercel.app/api/students/${selectedStudentId}`,
        { campusId: campus.id }
      );
      fetchAllStudents(); // Refresh all students
      fetchCampus(); // Refresh this campus's data
      setSelectedStudentId(""); // Reset dropdown
    } catch (error) {
      console.error("Error adding student to campus:", error);
    }
  };

  if (!campus) return <div>Loading...</div>;

  return (
    <div className="center-container">
      <div className="campus-details-body">
        <div className="heading">
          <h1>Campus Details</h1>
        </div>
        <div className="campus-details">
          <img className="campus-image" src={campus.imageUrl} alt={campus.name} />
          <h2>{campus.name}</h2>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
        </div>
      </div>

      <div className="add-student">
        <form className="add-student" onSubmit={handleAddStudentToCampus}>
          <label htmlFor="add-student-drop-down">Add a New Student</label>
          <select
            id="add-student-drop-down"
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            required
          >
            <option value="">Choose an option</option>
            {students &&
              students.map((student) => (
                <option key={student.id} value={student.id}>
                  ID:{student.id} | Name:{student.firstName} {student.lastName}
                </option>
              ))}
          </select>
          <button type="submit">Add Student</button>
        </form>
      </div>

      <div className="students">
        <h2>Attending Students</h2>
        {campus.students && campus.students.length > 0 ? (
          campus.students.map((student) => (
            <StudentInCampusCard
              key={student.id}
              student={student}
              fetchAllStudents={fetchCampus}
              students={campus.students}
            />
          ))
        ) : (
          <p>It looks like no students have been added to this campus yet!</p>
        )}
      </div>
    </div>
  );
};

export default CampusDetails;
