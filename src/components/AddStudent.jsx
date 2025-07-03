import React, { useState } from "react";
import "./AddStudentStyles.css";
import axios from "axios";

export default function AddStudent() {
  async function searchForCampusId(campusName) {
    try {
      const response = await axios.get("http://localhost:8080/api/campuses/");
      const campuses = await response.data;
      return campuses.find((campus) => campus.name === campusName);
    } catch (error) {
      console.error(error.message);
    }
  }
  async function addStudent(fn, ln, email, campus, imageUrl, gpa) {
    try {
      if (campus) {
        const campusName = await searchForCampusId(campus);
        if (campusName) campus = campusName.id;
      }
      await axios.post("http://localhost:8080/api/students", {
        firstName: fn,
        lastName: ln,
        email: email,
        imageUrl: imageUrl || undefined,
        campusId: campus || undefined,
        gpa: Number(gpa),
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  function onSubmit(formData) {
    try {
      const [firstName, lastName, email, campus, imageUrl, gpa] = [
        formData.get("firstName"),
        formData.get("lastName"),
        formData.get("email"),
        formData.get("campus"),
        formData.get("imageUrl"),
        formData.get("gpa"),
      ];

      addStudent(firstName, lastName, email, campus, imageUrl, gpa);
    } catch (error) {
      console.error({ error: error.message });
    }
  }

  return (
    <form className="form" action={onSubmit}>
      <h1>Add Student</h1>
      <label className="label">
        First Name:
        <input
          required
          className="input"
          type="text"
          name="firstName"
          placeholder="John"
        />
      </label>
      <label className="label">
        Last Name:
        <input
          required
          className="input"
          type="text"
          name="lastName"
          placeholder="Doe"
        />
      </label>
      <label className="label">
        Email:
        <input
          required
          className="input"
          type="email"
          name="email"
          placeholder="johndoe@aol.com"
        />
      </label>
      <label className="label">
        Image URL:
        <input
          className="input"
          type="url"
          name="imageUrl"
          placeholder="https://example.com/image.jpg"
        />
      </label>
      <label className="label">
        Campus:
        <input
          className="input"
          type="text"
          name="campus"
          placeholder="(optional)"
        />
      </label>
      <label className="label">
        GPA:
        <input
          className="input"
          type="number"
          name="gpa"
          step={0.01}
          min={0}
          max={4}
          defaultValue={0}
          placeholder="(optional: default is 0)"
        />
      </label>
      <button className="button">Add Student</button>
    </form>
  );
}
