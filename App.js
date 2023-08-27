import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text } from "react-native";
import FlatListC from "./src/components/FlatListC";
import Input from "./src/components/Input";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Zungur Store</Text>
      <Input />
      <FlatListC />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: Platform.OS == "android" ? 50 : 0,
  },
  logo: {
    fontSize: 28,
    color: "#F94C10",
    fontWeight: "bold",
    marginHorizontal: 5,
  },
});
