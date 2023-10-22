import React from "react";
import "../styles/Section.css";

export const Section = ({ taskDecription }) => {
  return (
    <div className="Section">
      <ol className="list">
        {taskDecription.map((item, index) => {
          return (
            <>
              <li className="instruction">{`${index + 1}. ${item}`}</li>
              <hr />
            </>
          );
        })}
      </ol>
    </div>
  );
};
