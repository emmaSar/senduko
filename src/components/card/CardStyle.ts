import Colors from "../../constants/Colors";

export const styles = {
  container: {
    padding: "20px",
    width: "29.5%",
    backgroundColor: "#F3F7FE",
    borderRadius: 60,
    height:400,
    display:'flex',
    flexDirection:'column' as 'column',
    minWidth:330,
    marginRight:20,

  },
  image:{
    width:'100%',
    height:236,
    borderRadius:42
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 600,
    width: "80%",
    color:Colors.darkBlue,
    margin:'8px 0px'
  },
  rightBlock: {
    width: 24,
    height: 24,
  },
  subTitle:{
    textOverflow: 'ellipsis',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
    color:'#00333E'
  }
};
