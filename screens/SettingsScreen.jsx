import {
  useColorScheme,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { useFonts, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import ListItem from "./components/ListItem";
import { openLink } from "../lib/OpenLink";
import { links } from "../lib/config/links";
const SettingsScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const version = "0.0.2";
  const appVersion = Constants.manifest.version;
  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
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
          fontFamily: "Comfortaa_700Bold",
          color: colorScheme === "dark" ? "#fff" : "#000",
          fontSize: 28,
        }}
      >
        Settings
      </Text>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Account");
            }}
          >
            <ListItem icon="account-circle" title="Account" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Translations");
            }}
          >
            <ListItem icon="translate" title="Translations" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Clear History",
                "Are you sure you want to clear your history?",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => {},
                  },
                ]
              );
            }}
          >
            <ListItem icon="delete-forever" title="Clear History" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Coming soon", "This feature is coming soon.");
            }}
          >
            <ListItem icon="color-lens" title="Themes" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openLink(links.feedbackUrl);
            }}
          >
            <ListItem icon="thumb-up" title="Feedback and suggestions" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openLink(links.supportUrl);
            }}
          >
            <ListItem icon="attach-money" title="Support" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (appVersion !== version) {
                Alert.alert(
                  "Update available",
                  `Version ${version} is available. Would you like to update?`,
                  [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    {
                      text: "OK",
                      onPress: () => {
                        openLink("https://github.com/jabedzaman/bozo/releases");
                      },
                    },
                  ]
                );
              } else {
                Alert.alert("No updates available", "You are up to date.");
              }
            }}
          >
            <ListItem icon="update" title="Check for updates" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("About");
            }}
          >
            <ListItem icon="info" title="About" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
