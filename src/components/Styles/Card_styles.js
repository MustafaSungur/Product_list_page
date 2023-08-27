import { Dimensions, StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#eee",
    margin: 5,

    borderRadius: 10,
    justifyContent: "space-between",
  },
  image_container: {
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 2 / 3,
    borderRadius: 10,
    objectFit: "contain",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  nostock: {
    color: "red",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
