import React from "react";
import "./FacultyStyles.css";

const Faculty = () => {
  return (
    <div className="faculty-page">
      <h1 className="faculty-title">Meet the Team</h1>
      <div className="faculty-grid">
        {/* Member 1 */}
        <div className="faculty-card">
          <img
            src="https://www.shutterstock.com/image-photo/computer-hacker-hoodie-obscured-dark-600nw-2088640753.jpg"
            alt="Member 1"
            className="faculty-image"
          />
          <h3 className="faculty-name">Ramses Sanchez</h3> 
          <p className="faculty-role">Back End Developer</p> 
        </div>

        {/* Member 2 */}
        <div className="faculty-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSteWRvxNMOsq2Ex0cYxhyK9yDIvBtl8FaUQ&s"
            alt="Member 2"
            className="faculty-image"
          />
          <h3 className="faculty-name">Emmanuel Ruiz</h3>
          <p className="faculty-role">Back End Developer</p>
        </div>

        {/* Member 3 */}
        <div className="faculty-card">
          <img
            src="https://demontattler.com/wp-content/uploads/2019/05/Anonymous.jpg"
            alt="Member 3"
            className="faculty-image"
          />
          <h3 className="faculty-name">Frank Petta</h3>
          <p className="faculty-role">Front End Developer</p>
        </div>

        {/* Member 4 */}
        <div className="faculty-card">
          <img
            src="https://www.shutterstock.com/image-vector/moscow-russia-april-4-2022-600nw-2142695819.jpg"
            alt="Member 4"
            className="faculty-image"
          />
          <h3 className="faculty-name">Emmanuel Rivas</h3>
          <p className="faculty-role">Front End Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
