import React from "react";
import axios from "axios";
import { useState } from "react";
import "./AddCampusStyles.css";

export default function AddCampus() {
  const [error, setError] = useState("");

  async function addCampus(c, add, imgUrl, desc) {
    try {
      await axios.post("https://crud-backend-gilt.vercel.app/api/campuses", {
        name: c,
        address: add,
        imageUrl: imgUrl || undefined,
        description: desc,
      });
    } catch (error) {
      console.error(error.message);
      setError("There was an error adding the campus, please try again later!");
    }
  }

  function onSubmit(formData) {
    const [campus, address, imageUrl, description] = [
      formData.get("campusName"),
      formData.get("address"),
      formData.get("imageUrl"),
      formData.get("description"),
    ];

    addCampus(campus, address, imageUrl, description);
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
      <label className="label">
        Image Url:
        <input
          className="input"
          type="url"
          name="imageUrl"
          placeholder="http://example.com/image.jpg"
        />
      </label>
      <label className="label">
        Description:
        <textarea className="input" name="description" />
      </label>
      {error ? <p className="error">{error}</p> : null}
      <button className="button">Add Campus</button>
    </form>
  );
}
