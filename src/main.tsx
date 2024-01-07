import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@store";
import { theme } from "@styles/index.ts";
import { ThemeProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
        </LocalizationProvider>
      </Provider>
    </ThemeProvider>
  </React.Fragment>
);
