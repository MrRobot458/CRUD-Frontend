import React, { useEffect, useState } from "react";
import CampusCard from "./CampusCard";
import { Link, useLocation } from "react-router-dom";

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
    <div>
      <Link to="/add-campus">
        <h2 className="heading">Click Here to Add a New Campus🏫</h2>
      </Link>
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
          <p>No Campuses found</p>
        )}
      </div>
    </div>
  );
};

export default AllCampuses;


