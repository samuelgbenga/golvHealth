import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, to }) => {
  return (
    <div>
      <Link to={to} className=" bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
        {title}
      </Link>
    </div>
  );
};

export default Button;
