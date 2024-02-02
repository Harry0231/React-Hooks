import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  count: 0,
  ShowCountFlag: true,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "sub":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "showcount":
      return { ...state, ShowCountFlag: !state.ShowCountFlag };

    default:
      return state;
  }
};

const UseReducerHook = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> use Reducer Hook</h1>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {state.ShowCountFlag ? <h6>The count is {state.count}</h6> : null}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button
          className="btn btn-warning"
          onClick={() => dispatch({ type: "add" })}
        >
          Inc
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch({ type: "sub" })}
        >
          Dec
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch({ type: "showcount" })}
        >
          showCount
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
