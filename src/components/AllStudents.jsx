import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import { useLocation } from "react-router-dom";

const AllStudents = ({ students, fetchAllStudents }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "";

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filteredStudents = students.filter((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
    setFiltered(filteredStudents);
  }, [searchTerm, students]);

  return (
    <div className="student-grid-wrapper">
      <div className="student-grid">
        {filtered.length > 0 ? (
          filtered.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              fetchAllStudents={fetchAllStudents}
            />
          ))
        ) : (
          <p>No students found.</p>
        )}
      </div>
    </div>
  );
};

export default AllStudents;


