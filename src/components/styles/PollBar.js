const styles = (theme) => ({
  bar: {
    background: "#bde0ff",
  },
  badge: {
    borderRadius: 200,
    width: 40,
    height: 40,
    right: 5,
    wordWrap: "break-word",
    backgroundColor: "red",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f1f1c0",
    border: "0.05em solid #bde0ff",
    margin: 15,
    borderRadius: 3,
  },
  subHeadDiv: {
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 20,
  },
  optionText: {
    textAlign: "left",
    display: "flex",
  },
  barDiv: {
    borderRadius: 5,
    margin: "0 20px 10px 20px",
    padding: 2,
    border: "0.05em solid #bde0ff",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
