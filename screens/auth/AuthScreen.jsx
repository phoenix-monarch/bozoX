import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animation] = useState(new Animated.Value(0));
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  const iconAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["50%", "10%"],
  });

  const inputAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimatedIcon
        name="md-person"
        size={100}
        color={
          colorScheme === "dark"
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(0, 0, 0, 0.2)"
        }
        style={{ position: "absolute", top: iconAnimation }}
      />
      <Animated.View
        style={{
          width: "100%",
          alignItems: "center",
          opacity: inputAnimation,
        }}
      >
        <TextInput
          style={{
            width: "80%",
            height: 50,
            backgroundColor:
              colorScheme === "dark"
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.2)",
            borderRadius: 10,
            paddingHorizontal: 20,
            marginBottom: 20,
            color: "white",
          }}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={{
            width: "80%",
            height: 50,
            backgroundColor:
              colorScheme === "dark"
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.2)",
            borderRadius: 10,
            paddingHorizontal: 20,
            marginBottom: 20,
            color: "white",
          }}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity
          style={{
            width: "80%",
            height: 50,
            backgroundColor:
              colorScheme === "dark"
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.2)",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: colorScheme === "dark" ? "#171717" : "#fff",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
