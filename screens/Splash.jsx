import { Text, useColorScheme } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Lottie from "lottie-react-native";

const Splash = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const loggedIn = true;
  const navigateToHome = () => {
    navigation.navigate("Tabs");
  };
  const navigateToAuth = () => {
    navigation.navigate("Auth");
  };
  const navigationdestination = loggedIn ? navigateToHome : navigateToAuth;
  useEffect(() => {
    const interval = setInterval(() => {
      navigationdestination();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
      }}
    >
      <Lottie
        source={require("../assets/animations/runningcat.json")}
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text
        style={{
          color: colorScheme === "dark" ? "#fff" : "#000",
          fontSize: 40,
        }}
      >
        BOZO
      </Text>
      <Text
        style={{
          color: colorScheme === "dark" ? "#fff" : "#000",
          fontSize: 12,
        }}
      >
        Stream your favorite anime
      </Text>
    </SafeAreaView>
  );
};

export default Splash;
