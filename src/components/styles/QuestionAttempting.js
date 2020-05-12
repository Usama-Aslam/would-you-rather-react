const styles = (theme) => ({
  answerLabels: {
    fontSize: 18,
  },
  radio: {
    color: "#bde0ff",
    padding: 30,
    "&$checked": {
      color: "#bde0ff",
    },
  },
  checked: {},
  button: {
    border: "0.1em solid #bde0ff",
    backgroundColor: "white",
    width: "100%",
    "&:hover": {
      backgroundColor: "#bde0ff",
    },
    marginTop: 18,
  },
  root: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    textAlign: "left",
    padding: 20,
  },
});

export default styles;
