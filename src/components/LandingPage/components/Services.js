import React from "react";
import ServicesBtn from "./ServicesBtn";
import "../styles/Services.css";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="Services">
      <div className="container">
        <div className="nav">
          <p className="title">Our services</p>
          <ServicesBtn />
        </div>
        <div className="cards">
          <div id="card">
            <img
              src={require("../assets/img/Management-transformed.png")}
              alt="Smartphone in hand"
            />
            <p className="disc">Daily Routine Management</p>
            <p className="text">
              Our daily routine management feature is designed to help you stay
              organized, motivated, and on track, so you can make the most of
              your day.
            </p>
            <Link to="/" />
          </div>
          <div id="card">
            <img
              src={require("../assets/img/Management-transformed.png")}
              alt="Smartphone in hand"
            />
            <p className="disc">Daily Routine Management</p>
            <p className="text">
              Our daily routine management feature is designed to help you stay
              organized, motivated, and on track, so you can make the most of
              your day.
            </p>
            <Link to="/" />
          </div>
          <div id="card">
            <img
              src={require("../assets/img/Management-transformed.png")}
              alt="Smartphone in hand"
            />
            <p className="disc">Daily Routine Management</p>
            <p className="text">
              Our daily routine management feature is designed to help you stay
              organized, motivated, and on track, so you can make the most of
              your day.
            </p>
            <Link to="/" />
          </div>
        </div>
      </div>
    </div>
  );
};
