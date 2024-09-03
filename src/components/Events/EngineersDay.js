import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

const EngineersDay = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="event-title">
        <h1 className="event-title-heading text-center cssFont mt-10 fs-7">
          Utkarsh 2024 Events
        </h1>
      </div>

      {/* Event Timelines */}
      <div className="timeline">
        <div className="timeline-container left-container">
          <img src="images/pptLogo.png" alt="Techxplore Logo" className="timeline-logo" />
          <div className="text-box">
            <h2 className="time-line-heading">TECHNICAL EVENTS</h2>
            <p>Techxplore (PPT)</p>
            <p>Chase with Mastermind (Quiz)</p>
            <p>Poster Arena (Poster Presentation)</p>
            <p>Project Expo</p>
            <p>Spontaneous Competition</p>
            <p>Crazy Output</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="timeline-container right-container">
          <img src="images/ongm.png.jpg" alt="Online Games Logo" className="timeline-logo" />
          <div className="text-box">
            <h2 className="time-line-heading">ONLINE GAMES</h2>
            <p>PUBG</p>
            <p>FreeFire</p>
            <p>Ludo</p>
            <p>UNO</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="timeline-container left-container">
          <img src="images/ofgm.png.jpg" alt="Offline Games Logo" className="timeline-logo" />
          <div className="text-box">
            <h2 className="time-line-heading">OFFLINE GAMES</h2>
            <p>Chess</p>
            <p>Sudoku</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="timeline-container right-container">
          <img src="images/crazyOutput.png" alt="Crazy Events Logo" className="timeline-logo" />
          <div className="text-box">
            <h2 className="time-line-heading">CRAZY EVENTS</h2>
            <p>Team Building Balloon Game</p>
            <p>Mini Basket</p>
            <p>Tic Tac Toe</p>
            <p>Photo Contest</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>

      {/* Event Registration Cards */}
      <div className="event-registration-title">
        <h1 className="text-center">Event Registrations</h1>
      </div>

      {/* Technical Events Card */}
      <div className="event-container">
        <div className="item-container">
          <div className="img-container">
            <img src="./images/Technical.jpeg" alt="Technical Events" style={{ objectFit: "cover", height: "400px" }} />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">TECHNICAL EVENTS</p>
              <div className="separator"></div>
              <p className="info">Each team should have 1-4 participants. For Crazy Output, only one member is allowed.</p>
              <p className="price">Team Event</p>
              <div className="additional-info">
                <p className="info description">
                  With no specific subject constraints, participants can choose any area of interest, from AI to software development, and actively engage through workshops.
                </p>
              </div>
            </div>
            <button
              className="action"
              onClick={() => {
                window.location.href = '/technicalQuizRegistration';
              }}
            >
              Click here
            </button>
          </div>
        </div>

        {/* Online Games Card */}
        <div className="item-container">
          <div className="img-container">
            <img src="./images/ONLINE.jpg.jpeg" alt="Online Games" style={{ objectFit: "cover", height: "400px" }} />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">ONLINE GAMES</p>
              <div className="separator"></div>
              <p className="info">Each team must have a minimum of 2 participants.</p>
              <p className="price">Team Event</p>
              <div className="additional-info">
                <p className="info description">
                  Players can engage in various genres, including action, adventure, puzzle, and role-playing games, often forming communities around shared interests.
                </p>
              </div>
            </div>
            <button
              className="action"
              onClick={() => {
                window.location.href = '/posterPresentationRegistration';
              }}
            >
              Click here
            </button>
          </div>
        </div>

        {/* Offline Games Card */}
        <div className="item-container">
          <div className="img-container">
            <img src="./images/OFFLINE.jpeg" alt="Offline Games" style={{ objectFit: "cover", height: "400px" }} />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">OFFLINE GAMES</p>
              <div className="separator"></div>
              <p className="info">Each team can have a maximum of 2 participants.</p>
              <p className="price">Team Event</p>
              <div className="additional-info">
                <p className="info description">
                  Offline games like chess and Sudoku offer engaging, strategic challenges that can be played without an internet connection. These games promote critical thinking, problem-solving, and mental agility.
                </p>
              </div>
            </div>
            <button
              className="action"
              onClick={() => {
                window.location.href = '/PPTRegistration';
              }}
            >
              Click here
            </button>
          </div>
        </div>

        {/* Crazy Events Card */}
        <div className="item-container">
          <div className="img-container">
            <img src="./images/Rename.png.jpeg" alt="Crazy Events" style={{ height: "400px", objectFit: "cover" }} />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">CRAZY EVENTS</p>
              <div className="separator"></div>
              <p className="info">Only one member is allowed.</p>
              <p className="price">Individual Event</p>
              <div className="additional-info">
                <p className="info description">
                  These events often include quirky games, creative challenges, or unexpected tasks that prioritize enjoyment over seriousness.
                </p>
              </div>
            </div>
            <button
              className="action"
              onClick={() => {
                window.location.href = '/crazyoutputregistration';
              }}
            >
              Click here
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EngineersDay;
