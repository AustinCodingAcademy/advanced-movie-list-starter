import React from 'react';

const Button = props => {
  return (
    <button
      className="btn btn-default"
      // style={buttonStyle}
      value={props.value}
      onClick={props.onClick}
      >{props.label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  value: React.PropTypes.string,
  onClick: React.PropTypes.func,
  label: React.PropTypes.string,
};
