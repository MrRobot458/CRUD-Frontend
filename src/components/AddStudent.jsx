import React, { useEffect, useState } from "react";
import "./AddStudentStyles.css";
import axios from "axios";
import { Link } from "react-router";

export default function AddStudent() {
  const [campuses, setCampuses] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getCampuses();
  }, []);

  async function getCampuses() {
    try {
      const response = await axios.get("http://localhost:8080/api/campuses/");
      const campusList = response.data;
      setCampuses(campusList);
    } catch (error) {
      console.error(error.message);
      setErrors([
        ...errors,
        "There was an issue retrieving campus data! You can still add the student, but without their campus!",
      ]);
    }
  }

  async function addStudent(fn, ln, email, campus, imageUrl, gpa) {
    try {
      if (typeof campus !== "number") campus = undefined;

      await axios.post("http://localhost:8080/api/students", {
        firstName: fn,
        lastName: ln,
        email: email,
        imageUrl: imageUrl || undefined,
        campusId: campus,
        gpa: Number(gpa),
      });
    } catch (error) {
      console.error(error.message);
      setErrors([...errors, "Add student failed! Please make sure you input a proper email"]);
    }
  }

  function onSubmit(formData) {
    const [firstName, lastName, email, campus, imageUrl, gpa] = [
      formData.get("firstName"),
      formData.get("lastName"),
      formData.get("email"),
      formData.get("campus"),
      formData.get("imageUrl"),
      formData.get("gpa"),
    ];

    addStudent(firstName, lastName, email, campus, imageUrl, gpa);
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
        Campus(
        <span className="tooltip-container">
          <Link className="linkToCreate" to="/add-campus">
            ?
          </Link>
          <div className="tooltip">
            Don't see your Campus listed? Click here to add it!
          </div>
        </span>
        ):
        <select name="campus" id="campus" className="input">
          <option value={undefined}>Choose a Campus</option>
          {campuses.map((campus) => (
            <option
              key={new Date() + new Date().getMilliseconds() + campus.id}
              value={campus.id}
            >
              {campus.name}
            </option>
          ))}
        </select>
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
      <ul className="errorsList">
        {errors.map((error, index) => (
          <li className="error" key={new Date() + index}>
            {error}
          </li>
        ))}
      </ul>
      <button className="button">Add Student</button>
    </form>
  );
}
