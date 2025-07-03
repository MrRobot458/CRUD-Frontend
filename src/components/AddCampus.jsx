import React from "react";
import "./AddCampusStyles.css";
import axios from "axios";

export default function AddCampus() {
  async function addCampus(c, add, imgUrl, desc) {
    try {
      await axios.post("http://localhost:8080/api/campuses", {
        name: c,
        address: add,
        imageUrl: imgUrl || undefined,
        description: desc,
      });
    } catch (error) {
      console.error(error.message);
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
        <textarea className="input" name="description"></textarea>
      </label>
      <button className="button">Add Campus</button>
    </form>
  );
}
