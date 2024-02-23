import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function RequestBookButton(props) {
  return (
    <TouchableHighlight underlayColor="#eee" onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Request Book</Text>
      </View>
    </TouchableHighlight>
  );
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
