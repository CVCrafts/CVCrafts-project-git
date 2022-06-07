import React from "react";
import ReactDOM from "react-dom/client";
import "@material-tailwind/react/tailwind.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <Auth0Provider
        domain={`miansonu.us.auth0.com`}
        clientId={`bkH5hl2y8yObNeOlSkJHga2cO44rV124`}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </>
);
