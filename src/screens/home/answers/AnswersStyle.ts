import Colors from "../../../constants/Colors";

export const styles = {
  container: {
    margin: "120px 330px 0px 330px",
  },
  smallContainer:{
    margin: "80px 16px 0px 16px",

  },
  heading: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    marginBottom:60
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center" as "center",
    color: Colors.darkBlue,
  },
  subTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    color: "#213E4A",
    textAlign: "center" as "center",
    marginTop: 8,
    marginBottom:60
  },
  accordion:{
    backgroundColor:'#F7F7F9',
    borderRadius:30,
    height:70,
    paddingLeft:40
  },
  accordionDetails:{
    backgroundColor:'#D7D3F3'
  }
};
