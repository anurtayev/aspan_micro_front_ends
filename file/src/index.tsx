import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

interface IEntry {
  id: string;
  name: string;
}

declare global {
  interface Window {
    renderFile(
      containerId: string,
      history: History,
      entryId: string,
      entryName: string
    ): void;
    unmountFile(containerId: string): void;
  }
}

window.renderFile = (
  containerId: string,
  history: History,
  entryId: string,
  entryName: string
): void => {
  ReactDOM.render(
    <App history={history} entryId={entryId} entryName={entryName} />,
    document.getElementById(containerId)
  );
};

window.unmountFile = (containerId: string) => {
  ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId) as HTMLElement
  );
};

serviceWorker.unregister();
