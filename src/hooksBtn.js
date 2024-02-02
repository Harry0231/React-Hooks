import React from "react";
import { Link } from "react-router-dom";

const HooksBtn = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">All Hooks</h1>
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-info mb-3" to="useState">
          useState Hook
        </Link>
        <Link className="btn btn-info mb-3" to="useEffect">
          useEffect Hook
        </Link>
        <Link className="btn btn-info mb-3" to="useContext">
          useContext Hook
        </Link>
        <Link className="btn btn-info mb-3" to="useReducer">
          useReducer Hook
        </Link>
        <Link className="btn btn-info mb-3" to="useRef">
          useRef Hook
        </Link>
        <Link className="btn btn-info mb-3" to="useLayoutEffect">
        useLayoutEffect Hook
        </Link><Link className="btn btn-info mb-3" to="useCustom">
        useCustom Hook
        </Link>
      </div>
    </div>
  );
};

export default HooksBtn;
