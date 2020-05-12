const styles = (theme) => ({
  centerScreen: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "inherit",
  },
  textField: {
    flex: 2,
    display: "flex",
    marginTop: 2,
    marginBottom: 2,
    justifyContent: "center",
    alignItems: "center",
    color: "#bde0ff",
  },
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#bde0ff",
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      borderColor: "#bde0ff",
    },
  },
  disabled: {},
  focused: {},
  error: {},
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#bde0ff",
    },
  },
  notchedOutline: {},
  cssLabel: {
    "&$cssFocused": {
      color: "#bde0ff",
    },
  },
  cssFocused: {},
  margin: {
    marginLeft: 15,
    marginBottom: 25,
  },
  button: {
    border: "0.1em solid #bde0ff",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#bde0ff",
    },
    marginTop: 18,
  },
  header: {
    flex: 2,
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    margin: 20,
  },
  subHead: {
    flex: 2,
    textAlign: "left",
    margin: 10,
    marginLeft: 20,
  },
});

export default styles;
