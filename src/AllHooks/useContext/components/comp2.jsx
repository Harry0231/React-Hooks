import React, { useContext } from "react";
import { GlobalContext } from "../use-context";

const Comp2 = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div>
      <button
        className={theme === "dark" ? "btn btn-primary" : "btn btn-info"}
      >
        Button 2
      </button>
    </div>
  );
};

export default Comp2;
