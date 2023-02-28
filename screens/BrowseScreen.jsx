import {
  useColorScheme,
  Text,
  View,
  ScrollView,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Comfortaa_600SemiBold } from "@expo-google-fonts/comfortaa";
import Genere from "./components/Genere";
import { SearchBar } from "@rneui/base";

const BrowseScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Comfortaa_600SemiBold,
  });

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Home");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          color: colorScheme === "dark" ? "#fff" : "#000",
          fontSize: 28,
          fontFamily: "Comfortaa_600SemiBold",
        }}
      >
        Browse
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            borderBottomWidth: 0,
            borderTopWidth: 0,
          }}
          inputContainerStyle={{ backgroundColor: "transparent" }}
          inputStyle={{ borderWidth: 0 }}
          placeholder="Search"
          onPressIn={() => navigation.navigate("Search")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Genere name="action" />
          <Genere name="adventure" />
          <Genere name="comedy" />
          <Genere name="crime" />
          <Genere name="dementia" />
          <Genere name="demons" />
          <Genere name="drama" />
          <Genere name="ecchi" />
          <Genere name="fantasy" />
          <Genere name="horror" />
          <Genere name="josei" />
          <Genere name="martial-arts" />
          <Genere name="mecha" />
          <Genere name="mystery" />
          <Genere name="parody" />
          <Genere name="psychological" />
          <Genere name="romance" />
          <Genere name="samurai" />
          <Genere name="school" />
          <Genere name="sci-fi" />
          <Genere name="seinen" />
          <Genere name="shoujo" />
          <Genere name="shouji-ai" />
          <Genere name="slice-of-life" />
          <Genere name="space" />
          <Genere name="sports" />
          <Genere name="supernatural" />
          <Genere name="suspense" />
          <Genere name="thriller" />
          <Genere name="vampire" />
          <Genere name="yaoi" />
          <Genere name="yuri" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrowseScreen;
