import React from "react";
import style from "./Image.module.css";
import withBorder from "./hoc/withBorder";
import withToggle from "./hoc/withToggle";

const Image = ({ image }) => {
  return <img src={image} alt="some random imge" />;
};

export default Image;
