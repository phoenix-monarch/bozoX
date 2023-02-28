import { View, Text, useColorScheme, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Comfortaa_600SemiBold } from "@expo-google-fonts/comfortaa";
import en from "../../lib/translations/en.config";
import ja from "../../lib/translations/ja.config";

const TranslationScreen = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const [language, setLanguage] = useState("en");
  const loadLanguage = async () => {
    const lang = await AsyncStorage.getItem("language");
    if (lang) {
      setLanguage(lang);
    }
  };
  useEffect(() => {
    loadLanguage();
  }, []);
  const languages = [
    {
      name: "English",
      code: "en",
      flag: "🇺🇸",
    },
    {
      name: "日本語",
      code: "ja",
      flag: "🇯🇵",
    },
  ];
  let [fontsLoaded] = useFonts({
    Comfortaa_600SemiBold,
  });

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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon
          name="arrow-back-ios"
          color={colorScheme === "dark" ? "#fff" : "#000"}
          size={28}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
            fontSize: 28,
            fontFamily: "Comfortaa_600SemiBold",
          }}
        >
          Translations
        </Text>
      </View>
      <View
        style={{
          marginVertical: 20,
        }}
      >
        {languages.map((lang, key) => (
          <TouchableOpacity
            key={key}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => {
              setLanguage(lang.code);
              AsyncStorage.setItem("language", lang.code);
            }}
          >
            <Text
              style={{
                color: colorScheme === "dark" ? "#fff" : "#000",
                fontSize: 20,
                marginVertical: 6,
              }}
            >
              {lang.flag}
              {"  "}
              {lang.name}
            </Text>
            <Icon
              name={
                lang.code === language
                  ? "check-circle"
                  : "radio-button-unchecked"
              }
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default TranslationScreen;
