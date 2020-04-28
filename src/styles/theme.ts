import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#FF0000"
      },
      secondary: {
        main: "#29339B"
      },
      background: {
        paper: "#191919",
        default: "#121212"
      }
    },
    overrides: {
      MuiCardHeader: {
        title: {
          fontSize: "16px"
        },
        subheader: {
          fontSize: "14px"
        }
      }
    },
    props: {
      MuiTab: {
        style: {
          minWidth: "50px"
        }
      },
      MuiTextField: {
        variant: "outlined"
      }
    },
    typography: {
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      h1: { fontWeight: 800 },
      h2: { fontWeight: 800 },
      h3: { fontWeight: 800 },
      h4: {
        fontWeight: 700
      },
      h5: {
        fontWeight: 700
      },
      h6: {
        fontWeight: 700
      }
    }
  })
);

export default theme;
