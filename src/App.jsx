//import libraries
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import axios from "axios";
//import css
import "./AppStyles.css";
//import components
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import AllCampuses from "./components/AllCampuses";
import CampusDetails from "./components/CampusDetails";
import AllStudents from "./components/AllStudents";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path="/campuses/:campusId" element={<CampusDetails />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/students/:studentId" element={<StudentDetails />} />
      </Routes>
    </div>
  );
};

// We're using React Router to handle the navigation between pages.
// It's important that the Router is at the top level of our app,
// and that we wrap our entire app in it. With this in place, we can
// declare Routes, Links, and use useful hooks like useNavigate.
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
