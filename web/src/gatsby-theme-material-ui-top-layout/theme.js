import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import {
  purple,
  indigo,
  pink,
  grey,
  blue,
  green,
  amber,
} from "@material-ui/core/colors"

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[800], // #283593
    },
    secondary: {
      main: purple[700], // #7b1fa2
    },
    common: {
      black: "#343a40",
      darkBlack: "rgb(36, 40, 44)",
    },
    info: {
      light: blue[300], // #64b5f6
      main: blue[500], // #2196f3
    },
    error: {
      main: pink[600], // #d81b60
    },
    background: {
      default: grey[50], // #fafafa
    },
    success: {
      main: green[600],
    },
    warning: {
      main: amber[700],
    }
  },
  typography: {
    h1: {
      fontFamily: '"Bungee Shade", cursive',
      fontSize: "5rem",
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
    },
    h3: {
      fontFamily: '"Bungee Shade", cursive',
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      fontSize: "2.5rem",
      letterSpacing: 0,
      textTransform: "inherit",
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
    },
    fontFamily: '"Roboto", sans-serif',
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: indigo[800],
      },
    },
    MuiPaper: {
      root: {
        // all dropdowns cover the whole page because of this
        // width: "100%",
      },
    },
    MuiLink: {
      root: {
        boxShadow: "none",
      },
      underlineHover: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
  },
})

export default responsiveFontSizes(theme)
