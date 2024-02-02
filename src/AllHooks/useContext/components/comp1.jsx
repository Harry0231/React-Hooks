import React, { useContext } from "react";
import { GlobalContext } from "../use-context";

const Comp1 = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div>
      <button
        className={theme === "light" ? "btn btn-primary" : "btn btn-info"}
      >
        Button 1
      </button>
    </div>
  );
};

export default Comp1;
