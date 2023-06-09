import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import blueGrey from "@mui/material/colors/blueGrey";
import { Provider } from "react-redux";
// import store from "./store/index";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { pokemonApi } from "./services/pokemon";

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    // MuiButtonBase: {
    //   defaultProps: {
    //     // The default props to change
    //     disableRipple: false, // No more ripple, on the whole application 💣!
    //   },
    // },
  },
  palette: {
    // mode: "dark",
    primary: blueGrey,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApiProvider api={pokemonApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
