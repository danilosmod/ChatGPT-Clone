import React from "react";
import "./Translation.css";

export default function Translation({ showInfo, setInput, answer }) {
  return (
    <div className="text-area-container">
      <textarea
        className="text-area"
        cols="50"
        rows="10"
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="translate-btn" onClick={showInfo}>
        DO YOUR THING!
      </button>
      <h3 className="answer-text">{answer.length > 0 ? answer : ""}</h3>
    </div>
  );
}
