import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyles";

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  Imgcontainer: {
    paddingVertical: 10,
    width: "50%",
    marginHorizontal: 40,
  },
  tinyLogo: {
    margin: 5,
    width: 120,
    marginVertical: 10,
  },
  heroContainer: {
    paddingVertical: 20,
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
});

export default styles;
