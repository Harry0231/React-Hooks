import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UseLayoutEffectHook = () => {
  const divRef = useRef();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const show = divRef.current;
    show.style.opacity = 0;

    setTimeout(() => {
      show.style.opacity = 1;
      show.style.color = "red";
    }, 2000);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Use Layout Effect Hook</h1>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <h6
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        text will be show after page render in 1 sec
      </h6>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div ref={divRef}>useLayout Effect</div>
      </div>
    </div>
  );
};

export default UseLayoutEffectHook;
