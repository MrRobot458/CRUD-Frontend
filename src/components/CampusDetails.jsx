import React from "react";
import { useParams, useState } from "react-router";
import "./CampusDetailsStyles.css"

/*
- [ ] The campus's name, image, address and description
- [ ] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [ ] Display the appropriate campus's info when the url matches `/campuses/:campusId`
- [ ] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view
- [ ] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [ ] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view
*/ 

const CampusDetails = ({ campuses, fetchAllCampuses, students }) => {



    return (
        <div>
        <div className="heading">
            <h1>Campus Details</h1>
        </div>
        <div>
            <img
            className="campus-image"
            src={campus.imageUrl}
            alt={campus.name}
            />
        </div>
        </div>
    )
}

export default CampusDetails;
