import React, { useContext } from "react";
import { GlobalContext } from "../use-context";

const ContextHook = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div>
      <button
        className="btn btn-warning"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Change Button Theme
      </button>
    </div>
  );
};

export default ContextHook;
