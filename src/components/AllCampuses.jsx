import React, { useEffect, useState } from "react";
import CampusCard from "./CampusCard";
import { useLocation } from "react-router-dom";

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
  );
};

export default AllCampuses;

