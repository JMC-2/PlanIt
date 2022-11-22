import React from "react";
// import css

const Button = ({ className, name }) => {
    return (
      <button className={className}>
        {name}
      </button>
    )
}

export default Button;