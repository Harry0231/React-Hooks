import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Effect = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [productList, setProductList] = useState("");

  function handleInc() {
    setCount(count + 1);
    setErrorMessage("");
  }
  function handleDec() {
    if (count > 0) {
      setCount(count - 1);
      setErrorMessage("");
    } else {
      setErrorMessage("Count cannot go below 0");
    }
  }

  const fetchApi = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);

    if (data && data.products) setProductList(data.products);
  };

  useEffect(() => {
    if (count % 4 === 0) {
      fetchApi();
    } else {
      setProductList("");
    }
  }, [count]);

  return (
    <div className="container justify-content-center">
      <div>
        <h1 className="text-center">useEffect Hook</h1>

        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
      <div>
        <h2>Counter</h2>
        <button onClick={handleInc}>Inc. +</button>

        <h5>The Count Is {count}</h5>
        {errorMessage && <p>{errorMessage}</p>}

        <button onClick={handleDec}>Dec. -</button>

        <h5>Note: The list is rendering when the count is multiple of 4.</h5>
      </div>
      <div className="justify-content-center">
        <ul>
          {productList && productList.length > 0
            ? productList.map((i) => <li key={i.id}>{i.title}</li>)
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Effect;
