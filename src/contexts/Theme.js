import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#2d2c2c",
      },
      secondary: {
        main: "#ae2626",
        light: "#dcdcdc",
      },
      background: {
        default: "rgb(36, 26, 26)",
        paper: "rgba(105,81,69,0.62)",
      },
      error: {
        main: "#FD5F0F",
      },
      warning: {
        main: "#f9b630",
      },
      info: {
        main: "#2195a7",
      },
      success: {
        main: "#019466",
      },
    },
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    spacing: 2,
    typography: {
      fontFamily: ["Montserrat", "Jost", "Open Sans"].join(","),
      h1: {
        fontSize: "2.7rem",
        fontFamily: "Montserrat",
        fontWeight: "bolder",
      },
      h2: {
        fontSize: "1.2rem",
        fontFamily: "Montserrat",
        fontStyle: "bold",
      },
      h3: {
        fontSize: "2.5rem",
        fontFamily: "Jost",
      },
    },
  })
);

export default theme;

// --color-bg: rgb(36, 26, 26);
// --color-mg: #1b1717;
// --color-fg: #303030;
// --color-charcoal: #312929;

// --color-tan1: #271b1b;
// --color-tan2: #7d5d3f;
// --color-tan3: #dbce9a;
// --color-tan4: #fdf8e3;

// --color-text-br: #08090a;
// --color-text-dk: #ffffff;

// --color-primary-bright: #f32833;
// --color-primary: #ae2626;

// --color-error: #eb5218;
// --color-danger: #563d7c;
// --color-warning: #f9b630;
// --color-info: #2195a7;
// --color-success: #019466;

// --color-blue: #4752ca;
// --color-red: #df3b3b;
// --color-green: #53cf7d;
// --color-gray: #b5bdc4;

// /* SIZES */
