import { useColorScheme, Text, ScrollView, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Comfortaa_600SemiBold } from "@expo-google-fonts/comfortaa";
import Lottie from "lottie-react-native";
import { loadSearches } from "../lib/LoadSearches";

const LibraryScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  useEffect(() => {
    loadSearches();
  }, []);
  const [loaded] = useFonts({
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
  if (!loaded) {
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
          fontFamily: "Comfortaa_600SemiBold",
          fontSize: 28,
          color: colorScheme === "dark" ? "#fff" : "#000",
        }}
      >
        Library
      </Text>
      <ScrollView
        style={{
          marginTop: 20,
        }}
      >
        {/* <Text
          style={{
            fontFamily: "Comfortaa_600SemiBold",
            fontSize: 20,
            color: colorScheme === "dark" ? "#fff" : "#000",
          }}
        >
          Recently watched
        </Text> */}

        <Lottie
          source={require("../assets/animations/cat.json")}
          autoPlay
          loop
          style={{
            width: "100%",
          }}
        />
        <Text
          style={{
            fontFamily: "Comfortaa_600SemiBold",
            fontSize: 16,
            color: colorScheme === "dark" ? "#fff" : "#000",
            marginTop: 40,
            alignSelf: "center",
          }}
        >
          Nothing here yet.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LibraryScreen;
