import {StyleSheet} from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "90%",
    marginTop:"10%",
    
  },
  inicial: {
    flex: 1,
    width: "100%",
    height: "90%",
    marginTop:"10%",
    justifyContent: "center",
    alignItems: "center"
    
  },
  image: {
    flex: 1,
    alignItems:'center',

  },
  text: {
    color: "blue",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "bold",
    backgroundColor: "#000000c0",
  },
  item: {
    
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "#000000c0",
    borderWidth: 1,
    borderColor: "gray",
    color: "white",
    width: "100%",
    height:53,
    textDecorationLine: "underline",
  },
  botao: {

    backgroundColor: "#FFFFFF",
    height: "5%",
    width: "60%",
    borderWidth: 1,
    borderColor: "#000000",
    textAlign: "center",
    paddingTop: "1%",
    fontWeight: "bold",
    fontSize: 15,
    color:"#FB1B1B"
  },
  sprites:{
    width:"50%",
    height:"50%"

  }
});