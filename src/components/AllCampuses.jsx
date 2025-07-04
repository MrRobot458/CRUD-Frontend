import React from "react";
import CampusCard from "./CampusCard";
import { Link } from "react-router";

const AllCampuses = ({ campuses, fetchAllCampuses, students }) => {
  return (
    <div>
      <Link to="/add-campus">
        <h2 className="heading">Click Here to Add a New Campus🏫</h2>
      </Link>
    <div className="campus-grid">
      {campuses.length > 0 ? (
        campuses.map((campus) => (
          <CampusCard key={campus.id} campus={campus} fetchAllCampuses={fetchAllCampuses} students={students} />
        ))
      ) : (
        <p>No Campuses found</p>
      )}
    </div>
    </div>
  );
};

export default AllCampuses;