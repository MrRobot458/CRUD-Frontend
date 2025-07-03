import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./CampusDetailsStyles.css";
import StudentInCampusCard from "./StudentInCampusCard";

const CampusDetails = () => {
  const { campusId } = useParams();
  const [campus, setCampus] = useState(null);

  const fetchCampus = async () => {
    try {
      const response = await axios.get(
        `https://crud-backend-gilt.vercel.app/api/campuses/${campusId}`
      );
      setCampus(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchCampus();
  }, [campusId]);

  if (!campus) return <div>Loading...</div>;

  return (
    <div className="center-container">
      <div className="campus-details-body">
        <div className="heading">
          <h1>Campus Details</h1>
        </div>
        <div className="campus-details">
          <img
            className="campus-image"
            src={campus.imageUrl}
            alt={campus.name}
          />
          <h2>{campus.name}</h2>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
        </div>
        </div>
        <div className="students">
            <h2>Attending Students</h2>
          {campus.students.length > 0 ? (
            campus.students.map((student) => (
              <StudentInCampusCard
                key={campus.students.id}
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
