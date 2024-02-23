// App.js
import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
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
              <Text style={styles.title}>Buat Akun</Text>
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
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="helo@gmail.com"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <Text style={styles.label}>Alamat</Text>
              <TextInput
                style={styles.input}
                placeholder="St. Avenue 34"
                autoCapitalize="words"
                autoCorrect={false}
                keyboardType="default"
              />
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="masukkan password"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
              />
              <Text style={styles.label}>Konfirmasi Password</Text>
              <TextInput
                style={styles.input}
                placeholder="konfirmasi password"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
              />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Register</Text>
              </TouchableOpacity>
              <View style={styles.linkContainer}>
                <Text style={styles.linkText}>
                  Sudah Memiliki Akun?{" "}
                  <Text style={styles.linkUnderline}>
                    <Text href="/login">Login</Text>
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
