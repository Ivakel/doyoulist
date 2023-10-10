import React from "react";
import ServicesBtn from "./ServicesBtn";

export const Main = () => {
  return (
    <div className="Main">
      <div className="content">
        <p className="advert">Get More Done with DoYouList</p>
        <p className="paragraph">
          DoYouList is the perfect task management solution for busy students
          and anyone looking to streamline their daily routine. Our easy-to-use
          to-do list keeps you organized and productive all day long.
        </p>
        <ServicesBtn />
      </div>
      <div className="subject">
        <img src="../assets/img/subject.PNG" alt="working subject" />
      </div>
    </div>
  );
};
