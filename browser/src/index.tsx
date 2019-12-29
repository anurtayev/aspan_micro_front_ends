import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const { REACT_APP_GQL_HOST: glqHost } = process.env;

const client = new ApolloClient({
  uri: glqHost
});

declare global {
  interface Window {
    renderBrowser(containerId: string, history: History): void;
    unmountBrowser(containerId: string): void;
  }
}

window.renderBrowser = (containerId: string, history: History): void => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App history={history} />
    </ApolloProvider>,
    document.getElementById(containerId)
  );
};

window.unmountBrowser = (containerId: string) => {
  ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId) as HTMLElement
  );
};

serviceWorker.unregister();
