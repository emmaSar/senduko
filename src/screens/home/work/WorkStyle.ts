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
    overflow:'scroll'    // width:'100%',
  },
  work: {
    padding: "12px 20px 32px 12px",
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
    width:'117%',
    marginLeft:-22,
    marginBottom:24

  },
  image1:{
    width:'105%',
    marginTop:-35,
    marginBottom:24,
    marginLeft:-5
  }
};
