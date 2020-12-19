import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";
import { firebase } from "./lib/firebase.prod";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
