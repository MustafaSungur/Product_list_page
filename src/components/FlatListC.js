import { FlatList, Text } from "react-native";
import productList from "../repository/productList.json";
import Card from "./Card";

const FlatListC = () => {
  return (
    <FlatList
      key={Math.random().toString()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Card product={item} style={styles.card} />}
      showsVerticalScrollIndicator={false}
      data={productList}
      numColumns={2}
    />
  );
};

export default FlatListC;
