import React, { useLayoutEffect } from "react";
import MenuImage from "../../components/MenuImage/MenuImage";
import {
    StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  TouchableHighlight 
} from "react-native";
// import FormButton from './components/Button/FormButton';
// import { Link } from 'expo-router';
// import 'nativewind/tailwind.css';



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Informasi Profil</Text>
            </View>
            <View style={styles.Imgcontainer}>
              <Image
                style={styles.profile}
                source={require("../../../assets/icons/profile.png")}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nama Lengkap</Text>
              <TextInput
                style={styles.input}
                placeholder="masukkan Nama"
                autoCapitalize="words"
                autoCorrect={false}
                keyboardType="default"
              />
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="username"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Text style={styles.label}>Status Akun</Text>
              <TextInput
                style={styles.input}
                placeholder="Normal"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
              />
              <Text style={styles.label}>Alamat</Text>
              <TextInput
                style={styles.input}
                placeholder="St.Avenue 34"
                secureTextEntry
                autoCapitalize="words"
                autoCorrect={false}
                keyboardType="default"
              />
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="helo@gmail.com"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <Text style={styles.label}>Nomor Telepon</Text>
              <TextInput
                style={styles.input}
                placeholder="0812132234"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#eee",
      alignItems: "center",
      justifyContent: "center",
    },
    scrollView: {
      width: "100%",
      flex: 1,
      paddingTop: 30,
      marginHorizontal: 20,
    },
    profile: {
      width: 50,
      marginVertical: 20,
    },
    formContainer: {
      borderRadius: 10,
      width: "85%",
      backgroundColor: "#fff",
      paddingHorizontal: 30,
      paddingVertical: 40,
      marginVertical: 40,
    },
    h2: {
      fontSize: 18,
      color: "#6E757C",
      textAlign: "center",
    },
    title: {
      fontSize: 21,
      fontWeight: "bold",
      color: "#122235",
    },
    inputContainer: {
      gap: 10,
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#122235",
    },
    input: {
      height: 40,
      borderColor: "#BDBDBD",
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    text: {
      color: "#fff",
      fontSize: 16,
    },
  });
export default App;

