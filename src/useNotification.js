import React from "react";
import { ReactDOM } from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can I steal your mac?", {
    body: "I need your mac.",
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
