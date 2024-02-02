import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UseRefHook = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Use Ref Hook</h1>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <input ref={inputRef} placeholder="focus here on page load....." />
      </div>
    </div>
  );
};

export default UseRefHook;
