import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 6,
    margin: 10,
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 215,
    borderColor: "#12235",
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: "100%",
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
    marginTop: 8,
  },
  categoriesInfo: {
    marginVertical: 5,
  },
  Imgcontainer: {
    width: "100%",
  },
  tinyLogo: {
    width: 130,
    resizeMode: "contain",
    marginLeft: 30,
  },
});

export default styles;
