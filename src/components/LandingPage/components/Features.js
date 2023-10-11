import React from "react";
import "../styles/Features.css";
import { ReactComponent as Checkmark } from "../assets/svg/checkmark1.svg";

export const Features = () => {
  const features = [
    "User-Friendly Task Management",
    "Streamlined To-Do List",
    "Detailed Task Instructions",
    "Convenient Sidebar Access",
    "Ongoing Support",
  ];
  const benefits = [
    "Simplified Task Management",
    "Increased Productivity",
    "Streamlined Daily Routine",
    "Enhanced Time Management",
    "Sustained Partnership",
  ];
  return (
    <div className="Features">
      <div className="cards">
        <div className="card">
          <p className="title">Features</p>
          <ul>
            {features.map((feature, index) => {
              return (
                <li>
                  <Checkmark className="checkmark" />
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="card">
          <p className="title">Benefits</p>
          <ul>
            {benefits.map((benefit, index) => {
              return (
                <li>
                  <Checkmark className="checkmark" />
                  {benefit}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="card">
          <img src={require("../assets/img/mountain.PNG")} alt="mountain" />
        </div>
      </div>
    </div>
  );
};
