// Import libraries
import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

// Import CSS
// import "./EditCampusStyles.css";

const EditCampus = ({ campus }) => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const editCampus = async (newName, newAddress, newImage, newDesc) => {
        try {
            const updateData = {};

            if ((newName !== undefined) && (newName !== '')) updateData.name = newName;
            if ((newAddress !== undefined) && (newAddress !== '')) updateData.address = newAddress;
            if ((newImage !== undefined) && (newImage !== '')) updateData.imageUrl = newImage;
            if ((newDesc !== undefined) && (newDesc !== '')) updateData.description = newDesc;

            if (Object.keys(updateData).length > 0)
                await axios.patch(`https://crud-backend-gilt.vercel.app/api/campuses/${campus.id}`, updateData);

            navigate(`/campuses/${campus.id}`);
        } catch (error) {
            console.error("Error editing campus:", error);
            alert("Failed to edit campus! Please try again.");
        }
    }

    const handleSubmission = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const newName = formData.get("newName");
        const newAddress = formData.get("newAddress");
        const newImage = formData.get("newImage");
        const newDesc = formData.get("newDesc");

        editCampus(newName, newAddress, newImage, newDesc)
            .finally(() => setIsSubmitting(false));
    }

    const handleCancellation = (e) => {
        e.preventDefault();
        navigate(`/campuses/${campus.id}`);
    }

    return (
        <div className="edit-campus">
            <form className="edit-campus-form" onSubmit={handleSubmission}>
                <h2 className="form-heading">Edit Campus</h2>
                <div className="current-section">
                    <h3 className="current-heading">Current Details</h3>
                    <div className="current-details">
                        <label className="label-current">
                            Name:
                            <p>{campus.name}</p>
                        </label>
                        <label className="label-current">
                            Address:
                            <p>{campus.address}</p>
                        </label>
                        <label className="label-current">
                            Description:
                            <p>{campus.description}</p>
                        </label>
                        <label className="label-current">
                            Image:
                            <img
                                className="img-current"
                                src={campus.imageUrl}
                                alt={campus.name}
                            />
                        </label>
                    </div>
                </div>
                <div className="new-section">
                    <h3 className="new-heading">New Details</h3>
                    <div className="new-details">
                        <label className="label-new">
                            Name:
                            <input
                                className="input-new"
                                type="text"
                                name="newName"
                                placeholder="BMCC"
                            />
                        </label>
                        <label className="label-new">
                            Address:
                            <input
                                className="input-new"
                                type="text"
                                name="newAddress"
                                placeholder="199 Chambers St. New York, New York 10007"
                            />
                        </label>
                        <label className="label-new">
                            Image URL:
                            <input
                                className="input-new"
                                type="url"
                                name="newImage"
                                placeholder="URL"
                            />
                        </label>
                        <label className="label-new">
                            Description:
                            <textarea
                                className="textarea-new"
                                name="newDesc"
                            ></textarea>
                        </label>
                    </div>
                </div>
                <div className="edit-form-buttons">
                    <button
                        className="cancel-btn"
                        type="button"
                        onClick={handleCancellation}
                    >
                        Cancel
                    </button>
                    <button
                        className="edit-btn"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Saving..." : "Submit Changes"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditCampus;
