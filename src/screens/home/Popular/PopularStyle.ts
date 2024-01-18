import Colors from "../../../constants/Colors";

export const styles = {
  container: {
    margin: "120px 100px 0px 100px",
    textAlign: "center" as "center",
  },
  smallContainer:{
    margin: "60px 16px 0px 16px",
    textAlign: "center" as "center",

  },
  header: {
    textAlign: "center" as "center",
    color: Colors.darkBlue,
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: 600,
    display: "block",
    marginBottom: 60,
  },

  rowContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 20,
    textTransform: "none" as "none",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 600,
    border: 0,
    backgroundColor: " #7C4FE7",
    width: "28%",
    marginTop: 60,
  },
  image: { width: 24, height: 24, marginLeft: 24 },
};
