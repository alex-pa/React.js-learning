import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

ReactDOM.render(<Counters />, document.getElementById("root"));
serviceWorker.unregister();
