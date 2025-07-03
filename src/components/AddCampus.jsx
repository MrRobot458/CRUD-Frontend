import React from "react";
import "./AddCampusStyles.css";
import axios from "axios";

export default function AddCampus() {
  async function addCampus(c, add) {
    try {
      await axios.post("http://localhost:8080/api/campuses", {
        name: c,
        address: add,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  function onSubmit(formData) {
    const campus = formData.get("campusName");
    const address = formData.get("address");

    addCampus(campus, address);
  }
  return (
    <form className="form" action={onSubmit}>
      <h1>Add Campus</h1>
      <label className="label">
        Campus Name:
        <input
          required
          className="input"
          type="text"
          name="campusName"
          placeholder="BMCC"
        />
      </label>
      <label className="label">
        Address:
        <input
          required
          className="input"
          type="text"
          name="address"
          placeholder="199 Chambers St. New York, NY 10007"
        />
      </label>
      <button className="button">Add Campus</button>
    </form>
  );
}
