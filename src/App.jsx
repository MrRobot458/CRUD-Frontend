import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import axios from "axios";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import AllCampuses from "./components/AllCampuses";
import CampusDetails from "./components/CampusDetails";
import AllStudents from "./components/AllStudents";
import StudentDetails from "./components/StudentDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <main className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/campuses" element={<AllCampuses />} />
          <Route path="/campuses/:campusId" element={<CampusDetails />} />
          <Route path="/students" element={<AllStudents />} />
          <Route path="/students/:studentId" element={<StudentDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};



const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);


