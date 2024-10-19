import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Card.css";

const Card = (props) => {
  const color = props.color;
  return (
    <div className="card">
      <Header color={color} />
      <p className="content">Description of what is done here</p>
      <Footer />
    </div>
  );
};

export default Card;
