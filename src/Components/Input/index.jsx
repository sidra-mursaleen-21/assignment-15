import React from "react";

export default function Input(props) {
  return (
    <>
      <h2 className="label">{props.label}</h2>
      <input
        id={props.id}
        value={props.value}
        className="input"
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        required={props.required}
      />
    </>
  );
}
