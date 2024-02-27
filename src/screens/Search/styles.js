import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyles";

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  btnIcon: {
    height: 14,
    width: 14,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    borderRadius: 20,
    width: 260,
    justifyContent: "space-around",
    paddingHorizontal: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "black",
  },
  searchInput: {
    backgroundColor: "#eee",
    color: "black",
    width: 180,
    height: 45,
  },
});

export default styles;
