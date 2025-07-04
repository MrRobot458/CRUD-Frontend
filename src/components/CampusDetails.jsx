import React from "react";
import { useParams } from "react-router-dom";
import "./CampusDetailsStyles.css";

const CampusDetails = ({ campuses, students }) => {
  const { campusId } = useParams();
  const campus = campuses.find((c) => c.id === Number(campusId));
  const campusStudents = students.filter((s) => s.campusId === Number(campusId));

  if (!campus) return <p>Campus not found</p>;

  return (
    <div className="campus-details">
      <h1>{campus.name}</h1>
      <img className="campus-image" src={campus.imageUrl} alt={campus.name} />
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <h2>Students</h2>
      {campusStudents.length > 0 ? (
        <ul>
          {campusStudents.map((s) => (
            <li key={s.id}>{s.firstName} {s.lastName}</li>
          ))}
        </ul>
      ) : (
        <p>No students enrolled.</p>
      )}
    </div>
  );
};

export default CampusDetails;
