//import libraries
import React from "react";
import { useEffect, useState } from "react";
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
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

const App = () => {

  const [students, setStudents] = useState([]);

  async function fetchAllStudents() {
    try {
      const response = await axios.get("https://crud-backend-gilt.vercel.app/api/students/");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const [campuses, setCampuses] = useState([]);

  async function fetchAllCampuses() {
    try{
      const response = await axios.get("https://crud-backend-gilt.vercel.app/api/campuses");
      setCampuses(response.data);
    }catch (error){
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchAllCampuses();
  }, []);
  

  return (
    <div>
      <NavBar />
        <Routes>
          <Route path = "/" element = {<LandingPage />} />
          <Route path = "/campuses" element = {<AllCampuses campuses={campuses} fetchAllCampuses={fetchAllCampuses} students={students} />} />
          <Route path = "/campuses/:campusId" element = {< CampusDetails campuses={campuses} fetchAllCampuses={fetchAllCampuses} students={students}/>} />
          <Route path = "/students" element = {< AllStudents students={students} fetchAllStudents={fetchAllStudents}/>} />
          <Route path = "/students/:studentId" element = {< StudentDetails/>} />
          <Route path = "/add-student" element = {<AddStudent />} />
          <Route path = "/students/:studentId/edit" element = {<EditStudent/>} />
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
