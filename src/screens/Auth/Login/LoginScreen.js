// App.js
import React from "react";
import styles from "./styles";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen(props) {
  const { navigation } = props;

  const App = () => {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Login Ke Plaform</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <View style={styles.linkContainer}>
              <Text style={styles.linkText}>
                Belum Memiliki Akun?{" "}
                <Text style={styles.linkUnderline}>
                  <Text href="/register">Daftar</Text>
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
}
