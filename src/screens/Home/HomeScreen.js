import React, { useLayoutEffect } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => (
        <View style={styles.Imgcontainer}>
          <Image
            style={styles.tinyLogo}
            source={require("../../../assets/icons/easybook.png")}
          />
        </View>
      ),
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Book", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="#eee"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.heroContainer}>
          <Image
            style={styles.heroImg}
            source={require("../../../assets/icons/hero.png")}
          />
          <Text style={styles.h1}>
            Jelajah Tanpa Batas : {"\n"} Temukan Ratusan Buku {"\n"} Dengan
            Cepat
          </Text>
        </View>
        <SafeAreaView style={styles.SafeAreaView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recipes}
            renderItem={renderRecipes}
            keyExtractor={(item) => `${item.recipeId}`}
          />
        </SafeAreaView>
        <View style={styles.premiumSection}>
          <Text style={styles.premiumheader}>
            Upgrade ke Premium untuk Pengalaman Peminjaman yang Lebih Baik!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
