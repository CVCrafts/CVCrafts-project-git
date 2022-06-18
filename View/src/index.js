import React from "react";
import ReactDOM from "react-dom/client";
import "@material-tailwind/react/tailwind.css";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process?.env?.REACT_APP_AUTHOPROVIDER_DOMAIN}
    clientId={process?.env?.REACT_APP_AUTHOPROVIDER_CLIENTID}
    redirectUri={window?.location?.origin}
    audience={process?.env?.REACT_APP_AUTHOPROVIDER_AUDIENCE}
    scope={process?.env?.REACT_APP_AUTHOPROVIDER_SCOPE}
    useRefreshTokens={true}
  >
    <App />
  </Auth0Provider>
);
