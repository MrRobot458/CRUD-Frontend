import React from "react";
import "./AddStudentStyles.css";
import axios from "axios";

function AddStudent() {
  const addStudent = async (fn, ln, email) => {
    try {
      await axios.post("https://crud-backend-gilt.vercel.app/api/students", {
        firstName: fn,
        lastName: ln,
        email: email,
      });
    } catch (error) {
      console.error("There was an issue adding the student: ", error.message);
    }
  };

  function onSubmit(formData) {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    addStudent(firstName, lastName, email);
  }

  return (
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      onSubmit(formData);
    }}>
      <h1>Add Student</h1>
      <label className="label">
        First Name:
        <input required className="input" type="text" name="firstName" placeholder="John" />
      </label>
      <label className="label">
        Last Name:
        <input required className="input" type="text" name="lastName" placeholder="Doe" />
      </label>
      <label className="label">
        Email:
        <input required className="input" type="email" name="email" placeholder="johndoe@aol.com" />
      </label>
      <button className="button">Add Student</button>
    </form>
  );
}

export default AddStudent;
