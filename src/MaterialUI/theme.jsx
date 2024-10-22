import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e69138",
    },
    secondary: {
      main: "#bcbcbc",
    },
  },
  typography: {
    button: {
      width: "300px",
      color: "#fff",
    },
  },
});

export default theme;
