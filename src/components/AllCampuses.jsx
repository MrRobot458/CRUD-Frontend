import React from "react";
import CampusCard from "./CampusCard";

const AllCampuses = ({ campuses, fetchAllCampuses, students }) => {
  return (
    <div className="campus-grid">
      {campuses.length > 0 ? (
        campuses.map((campus) => (
          <CampusCard key={campus.id} campus={campus} fetchAllCampuses={fetchAllCampuses} students={students} />
        ))
      ) : (
        <p>No Campuses found</p>
      )}
    </div>
  );
};

export default AllCampuses;