import { View, Text, Image } from "react-native";
import styles from "./Styles/Card_styles";

const Card = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={{ uri: product.imgURL }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      {(product.inStock && (
        <Text style={styles.price}>{product.price}</Text>
      )) || <Text style={styles.nostock}>STOKTA YOK</Text>}
    </View>
  );
};

export default Card;
