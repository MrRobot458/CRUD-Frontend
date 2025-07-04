import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import { Link, useLocation } from "react-router-dom";
import "./AllStudentsStyles.css";
import SearchBar from "./SearchBar";

const AllStudents = ({ students, fetchAllStudents }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlSearch = queryParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(urlSearch);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const filtered = students.filter((student) => {
      const studentValues = Object.values(student)
        .filter((val) => typeof val === "string")
        .join(" ")
        .toLowerCase();
      return studentValues.includes(searchQuery.toLowerCase());
    });
    setFilteredStudents(filtered);
  }, [searchQuery, students]);

  return (
    <div>
      <div className="all-students-body">
        <Link to="/add-student">
          <h2 className="heading">Click Here to Add a New Student👨‍🎓</h2>
        </Link>
        <SearchBar
          className="search-bar"
          query={searchQuery}
          setQuery={setSearchQuery}
          placeholder="Click Here to Search Students..."
        />
      </div>

      <div className="student-grid">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              fetchAllStudents={fetchAllStudents}
            />
          ))
        ) : (
          <p>No Students found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default AllStudents;
