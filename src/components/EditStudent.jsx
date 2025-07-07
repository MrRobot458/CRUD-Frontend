// Import libraries
import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

// Import CSS
import "./EditStudentStyles.css";

const EditStudent = ({ student }) => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const editStudent = async (newFirstName, newLastName, newEmail, newCampus, newImage, newGPA) => {
        try {
            const updateData = {};

            if ((newFirstName !== undefined) && (newFirstName !== '')) updateData.name = newFirstName;
            if ((newLastName !== undefined) && (newLastName !== '')) updateData.address = newLastName;
            if ((newEmail !== undefined) && (newEmail !== '')) updateData.address = newEmail;
            if ((newCampus !== undefined) && (newCampus !== '')) updateData.address = newCampus;
            if ((newImage !== undefined) && (newImage !== '')) updateData.imageUrl = newImage;
            if ((newGPA !== undefined) && (newGPA !== '')) updateData.description = newGPA;

            if (Object.keys(updateData).length > 0)
                await axios.patch(`https://crud-backend-gilt.vercel.app/api/students/${student.id}`, updateData);

            alert("Successfully edited student details!");
            navigate(`/students/${student.id}`);
        } catch (error) {
            console.error("Error editing student:", error);
            alert("Failed to edit student details! Please try again.");
        }
    }

    const handleSubmission = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const newFirstName = formData.get("newFirstName");
        const newLastName = formData.get("newLastName");
        const newEmail = formData.get("newEmail");
        const newCampus = formData.get("newCampus");
        const newImage = formData.get("newImage");
        const newGPA = formData.get("newGPA");

        editStudent(newFirstName, newLastName, newEmail, newCampus, newImage, newGPA)
            .finally(() => setIsSubmitting(false));
    }

    const handleCancellation = (e) => {
        e.preventDefault();
        navigate(`/students/${student.id}`);
    }

    return (
        <div className="edit-student">
            <form className="edit-student-form" onSubmit={handleSubmission}>
                <h2 className="form-heading">Edit Student</h2>
                <div className="current-section">
                    <h3 className="current-heading">Current Details</h3>
                    <div className="current-details">
                        { /***** FIX: CURRENT DETAILS GO HERE *****/}
                    </div>
                </div>
                <div className="new-section">
                    <h3 className="new-heading">New Details</h3>
                    <div className="new-details">
                        { /***** FIX: FORM INPUTS GO HERE *****/}
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

export default EditStudent;
