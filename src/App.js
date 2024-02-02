import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HooksBtn from "./hooksBtn";
import State from "./AllHooks/useState/use-state";
import Effect from "./AllHooks/useEffect/use-effect";
import Contextmain from "./contex-main";
import UseReducerHook from "./AllHooks/useReducer/use-Reducer";
import UseRefHook from "./AllHooks/useRef/use-ref";
import UseLayoutEffectHook from "./AllHooks/useLayoutEffect/use-LayoutEffect";
import UseCustomHook from "./AllHooks/customHook/use-CustomHook";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HooksBtn />} />
          <Route path="/useState" element={<State />} />
          <Route path="/useEffect" element={<Effect />} />
          <Route path="/useContext" element={<Contextmain />} />
          <Route path="/useReducer" element={<UseReducerHook />} />
          <Route path="/useRef" element={<UseRefHook />} />
          <Route path="/useLayoutEffect" element={<UseLayoutEffectHook />} />
          <Route path="/useCustom" element={<UseCustomHook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
