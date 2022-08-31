import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      id={props.id}
      className={classes.button}
      style={{ background: props.color }}
      type={props.type || "button"}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default Button;
