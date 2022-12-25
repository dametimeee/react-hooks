import React, { useEffect } from "react";
import { ReactDOM } from "react-dom";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function App() {
  const begForLife = () => {
    console.log("Pls dont leave");
  };
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
