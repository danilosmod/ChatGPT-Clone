import React from "react";
import "./OptionSelection.css";

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h2>Chat GPT</h2>
      <div className="chat-options-grid">
        {arrayItems.map((item) => {
          return (
            <div
              className="chat-options-grid-child"
              onClick={() => selectOption(item.option)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
