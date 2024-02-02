import { useState, useEffect } from "react";

const UseFetch = (url, options) => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const res = await fetch(url, { ...options });
      const result = await res.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  });
  return { data };
};

export default UseFetch;
