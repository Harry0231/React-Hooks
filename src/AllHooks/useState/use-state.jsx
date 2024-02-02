import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const State = () => {
  const navigate = useNavigate();
  const [textToggle, setTextToggle] = useState(false);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    setTextToggle(!textToggle);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleInc = () => {
    setCount(count + 1);
    setErrorMessage("");
  };

  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
      setErrorMessage("");
    } else {
      setErrorMessage("Count cannot go below 0");
    }
  };

  return (
    <div className="container justify-content-center">
      <div>
        <h1 className="text-center">useState Hook</h1>

        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>

      <div>
        <h2>Toggle Text</h2>
        <div>{textToggle ? <p>hello</p> : <p>By</p>}</div>
        <button onClick={handleClick}>Click</button>
      </div>

      <div>
        <h2>Show Text</h2>
        <input
          type="text"
          placeholder="Type here.."
          onChange={handleChangeText}
          value={text}
        />
        <button onClick={handleClearClick}>Clear Field</button>
        <p>This is {text}</p>
      </div>

      <div>
        <h2>Counter</h2>
        <button onClick={handleInc}>Inc. +</button>

        <h5>The Count Is {count}</h5>
        {errorMessage && <p>{errorMessage}</p>}

        <button onClick={handleDec}>Dec. -</button>
      </div>
    </div>
  );
};

export default State;
