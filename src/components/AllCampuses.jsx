import React, { useEffect, useState } from "react";
import CampusCard from "./CampusCard";
import { Link, useLocation } from "react-router-dom";
import "./AllCampuses.css"; 

const AllCampuses = ({ campuses, fetchAllCampuses, students }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "";

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filteredCampuses = campuses.filter((campus) =>
      campus.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filteredCampuses);
  }, [searchTerm, campuses]);

  return (
    <div className="all-campuses-container">
      <div className="add-campus-container">
        <Link to="/add-campus" className="add-campus-button">
          Add Campus <span className="plus-icon">+</span>
        </Link>
      </div>

      <div className="campus-grid">
        {filtered.length > 0 ? (
          filtered.map((campus) => (
            <CampusCard
              key={campus.id}
              campus={campus}
              fetchAllCampuses={fetchAllCampuses}
              students={students}
            />
          ))
        ) : (
          <p className="no-results-text">No Campuses found</p>
        )}
      </div>
    </div>
  );
};

export default AllCampuses;

