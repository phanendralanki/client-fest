import React, { useState, useEffect } from "react";
import "./details.css";

const Details = () => {
  const [technical, setTechnical] = useState([]);
  const [online, setOnline] = useState([]);
  const [offline, setOffline] = useState([]);
  const [crazy, setCrazies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getTechnical();
      await getOnline();
      await getOffline();
      await getCrazy();
    }

    fetchData();


   
  }, []); 

  const getTechnical = async () => {
    try {
      const response = await fetch(
        // "http://localhost:8080/api/technicalEvents/getAllTechnicalEvents"
        "https://server-fest.onrender.com/api/technicalEvents/getAllTechnicalEvents"
      );
      const data = await response.json();
      // console.log("API Response:", data);
      if (data && Array.isArray(data)) {
        setTechnical(data);
      } else {
        console.error("Unexpected data format:", data);
        setTechnical([]);
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      setTechnical([]);
    }
  };

  const getOnline = async () => {
    try {
      const response = await fetch(
        // "http://localhost:8080/api/onlineGames/getAllOnlineGames"
        "https://server-fest.onrender.com/api/onlineGames/getAllOnlineGames"
      );
      const data = await response.json();
      // console.log("API Response:", data);
      if (data && Array.isArray(data)) {
        setOnline(data);
      } else {
        console.error("Unexpected data format:", data);
        setOnline([]);
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      setOnline([]);
    }
  };

  const getOffline = async () => {
    try {
      const response = await fetch(
        // "http://localhost:8080/api/offlineGames/getAllOfflineGames"
        "https://server-fest.onrender.com/api/offlineGames/getAllOfflineGames"
      );
      const data = await response.json();
      // console.log("API Response:", data);
      if (data && Array.isArray(data)) {
        setOffline(data);
      } else {
        console.error("Unexpected data format:", data);
        setOffline([]);
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      setOffline([]);
    }
  };

  const getCrazy = async () => {
    try {
      const response = await fetch(
        // "http://localhost:8080/api/crazyEvent/getAllCrazyEvents"
        "https://server-fest.onrender.com/api/crazyEvent/getAllCrazyEvents"
      );
      const data = await response.json();
      // console.log("API Response:", data);
      if (data && Array.isArray(data)) {
        setCrazies(data);
      } else {
        console.error("Unexpected data format:", data);
        setCrazies([]);
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      setCrazies([]);
    }
  };

  return (
    <>
      {/* Technical Events */}
      <h1 className="text-center fw-bold text-danger">Technical Events</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <table
                className="table table-bordered table-hover table-responsive table-sm"
                // id="no-more-tables"
              >
                <thead>
                  <tr>
                    <th>Reg no</th>
                    <th>Mobile</th>
                    <th>Branch</th>
                    <th>Year</th>
                    <th>Interested Games</th>
                  </tr>
                </thead>
                <tbody>
                  {technical && technical.length > 0 ? (
                    technical.map((tech) => {
                      const selectedGames = Object.keys(tech.interestedGames)
                        .filter((game) => tech.interestedGames[game])
                        .join(", ");

                      return (
                        <tr key={tech._id}>
                          <td data-title="Reg no">{tech.regno}</td>
                          <td data-title="Mobile">{tech.mobileno}</td>
                          <td data-title="Branch">{tech.branch}</td>
                          <td data-title="Year">{tech.year}</td>
                          <td data-title="Interested Games">
                            {selectedGames || "None"}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No Technical Events data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Online Games */}
      <h1 className="text-center fw-bold text-success">Online Games</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <table
                className="table table-bordered table-hover table-responsive table-sm"
                // id="no-more-tables"
              >
                <thead>
                  <tr>
                    <th>Reg no</th>
                    <th>Mobile</th>
                    <th>Branch</th>
                    <th>Year</th>
                    <th>Interested Games</th>
                  </tr>
                </thead>
                <tbody>
                  {online && online.length > 0 ? (
                    online.map((onlineGame) => {
                      const selectedGames = Object.keys(
                        onlineGame.interestedGames
                      )
                        .filter((game) => onlineGame.interestedGames[game])
                        .join(", ");

                      return (
                        <tr key={onlineGame._id}>
                          <td data-title="Reg no">{onlineGame.regno}</td>
                          <td data-title="Mobile">{onlineGame.mobileno}</td>
                          <td data-title="Branch">{onlineGame.branch}</td>
                          <td data-title="Year">{onlineGame.year}</td>
                          <td data-title="Interested Games">
                            {selectedGames || "None"}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No online Games data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* offline Games */}
      <h1 className="text-center fw-bold text-warning">Offline Games</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <table
                className="table table-bordered table-hover table-responsive table-sm"
                // id="no-more-tables"
              >
                <thead>
                  <tr>
                    <th>Reg no</th>
                    <th>Mobile</th>
                    <th>Branch</th>
                    <th>Year</th>
                    <th>Interested Games</th>
                  </tr>
                </thead>
                <tbody>
                  {offline && offline.length > 0 ? (
                    offline.map((offlineGame) => {
                      const selectedGames = Object.keys(
                        offlineGame.interestedGames
                      )
                        .filter((game) => offlineGame.interestedGames[game])
                        .join(", ");

                      return (
                        <tr key={offlineGame._id}>
                          <td data-title="Reg no">{offlineGame.regno}</td>
                          <td data-title="Mobile">{offlineGame.mobileno}</td>
                          <td data-title="Branch">{offlineGame.branch}</td>
                          <td data-title="Year">{offlineGame.year}</td>
                          <td data-title="Interested Games">
                            {selectedGames || "None"}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No offline Games data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Crazy Events */}
      <h1 className="text-center fw-bold text-primary">Crazy Events</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <table
                className="table table-bordered table-hover table-responsive table-sm"
                // id="no-more-tables"
              >
                <thead>
                  <tr>
                    <th>Reg no</th>
                    <th>Mobile</th>
                    <th>Branch</th>
                    <th>Year</th>
                    <th>Interested Games</th>
                  </tr>
                </thead>
                <tbody>
                  {crazy && crazy.length > 0 ? (
                    crazy.map((crazyEvent) => {
                      const selectedGames = Object.keys(
                        crazyEvent.interestedGames
                      )
                        .filter((game) => crazyEvent.interestedGames[game])
                        .join(", ");

                      return (
                        <tr key={crazyEvent._id}>
                          <td data-title="Reg no">{crazyEvent.regno}</td>
                          <td data-title="Mobile">{crazyEvent.mobileno}</td>
                          <td data-title="Branch">{crazyEvent.branch}</td>
                          <td data-title="Year">{crazyEvent.year}</td>
                          <td data-title="Interested Games">
                            {selectedGames || "None"}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No quiz data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
