import React from "react";
import Comp1 from "./AllHooks/useContext/components/comp1";
import Comp2 from "./AllHooks/useContext/components/comp2";
import ContextHook from "./AllHooks/useContext/components/contextHook";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Contextmain = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container justify-content-center">
        <div>
          <h1 className="text-center">useContext Hook</h1>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
        <div className="App">
          <ContextHook />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Comp1 />
        <Comp2 />
      </div>
    </div>
  );
};

export default Contextmain;
