import Colors from "../../../constants/Colors";

export const styles = {
  container: {},
  header: {
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center" as "center",
    display: "block",
  },
  block: {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width:'100%',
  },
  work: {
    padding: "32px 20px",
    width: "29.5%",
    backgroundColor: "#DFEAFA",
    borderRadius: 60,
    height:400,
    minWidth:300,
    marginRight:20,
    textAlign:'center' as 'center'

  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    color: Colors.darkBlue,
    height:100,
  },
  image:{
    height:265,
    width:'100%'
  }
};
