import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StudentCard from "./StudentCard";
import CampusCard from "./CampusCard";

const SearchResults = ({ students, campuses, fetchAllStudents, fetchAllCampuses }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query")?.toLowerCase() || "";

  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filteredCampuses, setFilteredCampuses] = useState([]);

  useEffect(() => {
    const studentMatches = students.filter((student) =>
      `${student.firstName} ${student.lastName}`.toLowerCase().includes(query)
    );

    const campusMatches = campuses.filter((campus) =>
      campus.name.toLowerCase().includes(query)
    );

    setFilteredStudents(studentMatches);
    setFilteredCampuses(campusMatches);
  }, [query, students, campuses]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Search Results for: "{query}"</h2>

      <section>
        <h3>📚 Campuses</h3>
        {filteredCampuses.length > 0 ? (
          <div className="campus-grid">
            {filteredCampuses.map((campus) => (
              <CampusCard
                key={campus.id}
                campus={campus}
                fetchAllCampuses={fetchAllCampuses}
                students={students}
              />
            ))}
          </div>
        ) : (
          <p>No campuses found.</p>
        )}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>🎓 Students</h3>
        {filteredStudents.length > 0 ? (
          <div className="student-grid">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                fetchAllStudents={fetchAllStudents}
              />
            ))}
          </div>
        ) : (
          <p>No students found.</p>
        )}
      </section>
    </div>
  );
};

export default SearchResults;
