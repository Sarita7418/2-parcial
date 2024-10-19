import React from "react";
import imagen from "../assets/Jira.svg";
import "./Header.css";

const Header = ({ color }) => {
  return (
    <div className={`header ${color}`}>
      <div>
        <span className="number">1</span>
        <span>Agenda/Topic</span>
      </div>
      <div className="right">
        <span>SAAS-0000</span>
        <img src={imagen} alt="" />
      </div>
    </div>
  );
};

export default Header;
