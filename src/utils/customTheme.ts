import { createTheme } from "@mui/material";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0581e6",
      light: "#38a5ff",
    },
    secondary: {
      main: "#2196f3", // Change secondary color
    },
    // Add more color customizations if needed
  },
});

export default theme;
