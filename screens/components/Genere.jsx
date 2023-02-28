import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Genere = (props) => {
  const navigation = useNavigation();
  const backgroundColors = [
    "#F2CD5C",
    "#FCE22A",
    "#645CBB",
    "#3D1766",
    "#2B3467",
    "#E0144C",
  ];
  return (
    <TouchableOpacity
      style={{
        backgroundColor:
          backgroundColors[Math.floor(Math.random() * backgroundColors.length)],
        height: 80,
        width: 160,
        alignContent: "center",
        justifyContent: "flex-end",
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5,
      }}
      onPress={
        props.name
          ? () => navigation.navigate("Genere", { name: props.name })
          : null
      }
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          paddingHorizontal: 10,
          marginBottom: 10,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        {props.name ? props.name : "No Name"}
      </Text>
    </TouchableOpacity>
  );
};

export default Genere;
