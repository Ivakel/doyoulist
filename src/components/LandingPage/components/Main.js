import React from "react";

import "../styles/Main.css";

export const Main = () => {
  return (
    <div className="Main">
      <div className="content square">
        <p className="advert">Get More Done with DoYouList</p>
        <p className="paragraph">
          DoYouList is the perfect task management solution for busy students
          and anyone looking to streamline their daily routine. Our easy-to-use
          to-do list keeps you organized and productive all day long.
        </p>
      </div>
      <div className="subject square">
        <img
          src={require("../assets/img/subject-transformed.png")}
          alt="working subject"
        />
      </div>
    </div>
  );
};
