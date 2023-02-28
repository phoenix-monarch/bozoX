import { Image } from "@rneui/base";
import { View, Text, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Item = (props) => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const displaytitle =
    props.title.length > 20 ? props.title.slice(0, 20) + "..." : props.title;
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        maxWidth: "33%",
      }}
      onPress={() => {
        navigation.navigate("Anime", {
          title: props.title,
          image: props.image,
          status: props.releaseDate,
          id: props.id,
        });
      }}
    >
      <View>
        <Image
          source={{ uri: props.image }}
          style={{ width: 100, height: 150 }}
        />
      </View>
      <View style={{}}>
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 16,
          }}
        >
          {displaytitle || "Loading..."}
        </Text>
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 14,
          }}
        >
          {props.releaseDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
