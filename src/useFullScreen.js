import React from "react";
import { ReactDOM } from "react-dom";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    element.current.requestFullScreen();
    if (callback && typeof callback === "function") {
      callback(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxOTA0MjdfMjg0%2FMDAxNTU2MzQ0MjcyNjAy.IqO7GZq8WP1fses7MkwGI_SZjuPVB0itlbbvhPbXvEEg.qr3bw72DOd0Y4W3BfaM9DEWiHO04g9tUT61aBM1QS3Ug.PNG%2FIFSUDopNgAncF4MX7MT_dZsXn5FA.jpg&type=a340" />
        <button onClick={exitFull}>Make fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
