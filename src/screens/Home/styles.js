import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyles";

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  Imgcontainer: {
    width: "100%",
  },
  tinyLogo: {
    width: 130,
    resizeMode: "contain",
    marginLeft: 70,
  },
  heroContainer: {
    paddingVertical: 10,
    gap: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImg: {
    marginVertical: 20,
    position: "relative",
  },
  h1: {
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
  },
  SafeAreaView: {
    height: 250,
    width: "100%",
  },
  premiumSection: {
    flex: 1,
    width: "85%",
    gap: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 40,
    marginVertical: 40,
    marginHorizontal: 28,
  },
  premiumheader: {
    fontSize: 24,
    fontWeight: "semibold",
    textAlign: "center",
  },
});

export default styles;
