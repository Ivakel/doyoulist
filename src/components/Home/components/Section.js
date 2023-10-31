import React from "react";
import "../styles/Section.css";

export const Section = ({ taskDecription }) => {
  return (
    <div className="Section">
      <ol className="list">
        {taskDecription.length > 0 ? (
          taskDecription.map((item, index) => {
            return (
              <>
                <li className="instruction">{`${index + 1}. ${item}`}</li>
                <hr />
              </>
            );
          })
        ) : (
          <div className="section-placeholder">
            <p>Click on the task to view suggestions</p>
          </div>
        )}
      </ol>
    </div>
  );
};
