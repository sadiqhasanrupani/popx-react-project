import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

//^ App component
import App from "./App";

//^ global styleshet
import "./main.scss";

//^ store
import store from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
