import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#eee",
      alignItems: "center",
      justifyContent: "center",
    },
    formContainer: {
      borderRadius: 10,
      width: "85%",
      backgroundColor: "#fff",
      paddingHorizontal: 30,
      paddingVertical: 40,
    },
    titleContainer: {
      alignItems: "center",
      marginBottom: 30,
    },
    title: {
      fontSize: 21,
      fontWeight: "bold",
      color: "#122235",
    },
    inputContainer: {
      gap: 15,
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
      marginBottom: 15,
    },
    linkContainer: {
      alignItems: "center",
      marginTop: 15,
    },
    linkText: {
      fontSize: 14,
      color: "#1A1A1A",
    },
    linkUnderline: {
      // textDecorationLine: 'underline',
      color: "#ff7303",
    },
    button: {
      textAlign: "center",
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#ff7303",
      alignItems: "center",
    },
    text: {
      color: "#fff",
      fontSize: 16,
    },
  });