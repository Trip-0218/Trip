import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/UserProfileForm.css";

const UserProfileForm = () => {
  const [Img, setImg] = useState("");
  const [Age, setAge] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform login logic using the email and password state values
    console.log("Img:", Img);
    console.log("Age:", Age);
  };

  const Navigate = useNavigate();
  const handleSave = () => {
    Navigate("/");
  };

  return (
    <form className="form-control" onSubmit={handleFormSubmit}>
            <input
              type="Img"
              name="Img"
              id="Img"
              placeholder="Img URL"
              value={Img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
            <input
              type="Age"
              name="Age"
              id="Age"
              value={Age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button type="submit" onClick={handleSave}>
              Save
            </button>
          </form>
  );
};

export default UserProfileForm;
