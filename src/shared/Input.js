import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

Input.propTypes = {
  /** Input ID. Reason to use an ID
   * - It's important
   * - a11y
   */
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password", "email", "phone"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  type: "text"
};

export default Input;
