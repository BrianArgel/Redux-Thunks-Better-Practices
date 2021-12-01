import React from 'react'
import PropTypes from 'prop-types';

const Button = ({text,classColor,onClick,width}) => {
  return (
    <button
      className={`buttonBase ${classColor}`}
      style={{ width: width }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
Button.propTypes  = {
  text: PropTypes.string,
  classColor: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string
}

export default Button
