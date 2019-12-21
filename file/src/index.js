import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

window.renderFile = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window.unmountFile = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

serviceWorker.unregister();
