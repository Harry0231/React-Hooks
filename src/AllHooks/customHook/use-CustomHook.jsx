import React from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "./use-Fetch";

const UseCustomHook = () => {
  const navigate = useNavigate();
  const { data } = UseFetch("https://dummyjson.com/products", {});

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Use Custom Hook</h1>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <div>
        <ul style={{ textAlign: "center" }}>
          {data && data.products && data.products.length > 0 ? (
            data.products.map((i) => <li>{i.title}</li>)
          ) : (
            <h4>No Data</h4>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UseCustomHook;
