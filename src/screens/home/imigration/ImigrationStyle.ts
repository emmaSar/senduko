import Colors from "../../../constants/Colors";

export const styles = {
  container: {
    margin: "120px 100px 0px 100px",
  },
  smallContainer:{
    margin: "60px 16px 0px 16px",

  },
  header: {
    textAlign: "center" as "center",
    color: Colors.darkBlue,
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: 600,
    display:'block',
    marginBottom:60
  },
  work: {
    padding: "20px",
    width: "29.5%",
    backgroundColor: "#F3F7FE",
    borderRadius: 60,
    height:400,
    minWidth:330,
    marginRight:20,

  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    color: Colors.darkBlue,
    height:100
  },
  image:{
    height:300,
  },
  rowContainer:{
    display:'flex',
    justifyContent:'space-between',
  },
  firstBlock:{
    display:'flex',
    flexDirection:'column' as 'column',
    justifyContent:'space-between'
  }
};
