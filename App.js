import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// redux
import { Provider } from "react-redux";
import { Test } from "./src/screens/testScreen";
// Redux Store
import configure from "./src/store";

// Configure Store
const { store } = configure();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Test />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
