import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const PosterPresentation = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    regno: "",
    mobileno: "",
    year: "2nd year",
    branch: "IT",
    interestedGames: {
      pubg: false,
      freeFire: false,
      posterPresentation: false,
      ludo: false,
      uno: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        interestedGames: {
          ...formData.interestedGames,
          [name]: checked,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const postData = async (e) => {
    e.preventDefault();
    setLoading(true);

    // const regnoPattern = /^[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{4}$/;
    const mobilePattern = /^[0-9]{10}$/;

    // if (!regnoPattern.test(formData.regno)) {
    //   toast.error("Invalid registration number");
    //   setLoading(false);
    //   return;
    // }
    if (!mobilePattern.test(formData.mobileno)) {
      toast.error("Invalid Mobile number +91 not needed");
      setLoading(false);
      return;
    }

    const gamesSelected = Object.values(formData.interestedGames).some(
      (selected) => selected
    );
    if (!gamesSelected) {
      toast.error("Please select at least one game");
      setLoading(false);
      return;
    }
    try {
      // const response = await fetch("http://localhost:8080/api/onlineGames/registerForOnline", {
      const response = await fetch(
        "https://server-fest.onrender.com/api/onlineGames/registerForOnline",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 201) {
        toast.success("Registered successfully");
        setFormData({
          regno: "",
          mobileno: "",
          year: "2nd year",
          branch: "IT",
          interestedGames: {
            pubg: false,
            freeFire: false,
            posterPresentation: false,
            ludo: false,
            uno: false,
          },
        });
        setTimeout(() => {
          navigate("/events");
        }, 2000);
      } else if (response.status === 400) {
        toast.error("Already Registered with this registration number");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold text-center text-success mb-4">
              Online Game Registration
            </h1>
            <form onSubmit={postData}>
              <div className="mb-3">
                <label htmlFor="regno" className="form-label fw-bold">
                  Registration number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="regno"
                  value={formData.regno}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mobileno" className="form-label fw-bold">
                  Mobile number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="year" className="form-label fw-bold">
                  Select year
                </label>
                <select
                  name="year"
                  className="form-select"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="1st year">1st year</option>
                  <option value="2nd year">2nd year</option>
                  <option value="3rd year">3rd year</option>
                  <option value="4th year">4th year</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="branch" className="form-label fw-bold">
                  Select Branch
                </label>
                <select
                  name="branch"
                  className="form-select"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                >
                  <option value="CSE">CSE</option>
                  <option value="AIML">AIML</option>
                  <option value="CSE-DS">CSE-DS</option>
                  <option value="CSE-BS">CSE-BS</option>
                  <option value="CSE-CS">CSE-CS</option>
                  <option value="AI&DS">AI&DS</option>
                  <option value="CIVIL">CIVIL</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="IT">IT</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Robotics">Robotics</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                  <option value="BBA">BBA</option>
                  <option value="BCA">BCA</option>
                  <option value="BMS">BMS</option>
                  <option value="DIPLOMA">DIPLOMA</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Select Interested Games
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="pubg"
                    checked={formData.interestedGames.pubg}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Pubg</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="freeFire"
                    checked={formData.interestedGames.freeFire}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">FreeFire</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="ludo"
                    checked={formData.interestedGames.ludo}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Ludo</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="uno"
                    checked={formData.interestedGames.uno}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Uno</label>
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  {loading ? "Loading...." : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PosterPresentation;
