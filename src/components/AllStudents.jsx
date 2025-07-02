import React from "react";
import StudentCard from "./StudentCard";

const AllStudents = ({ students, fetchAllStudents }) => {
  return (
    <div className="student-grid">
      {students.length > 0 ? (
        students.map((student) => (
          <StudentCard key={student.id} student={student} fetchAllStudents={fetchAllStudents}  />
        ))
      ) : (
        <p>No Students found</p>
      )}
    </div>
  );
};

export default AllStudents;