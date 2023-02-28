import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  // ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import axios from "axios";
import { useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Image } from "@rneui/base";
import EpisodeItem from "./components/EpisodeItem";
import { saveSearch } from "../lib/SaveSearch";

const AnimeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { title, id, image } = route.params;
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const getinfo = async () => {
    try {
      setLoading(true);
      setInfo([]);
      const response = await axios.get(
        `https://bozo.jabed.me/anime/gogoanime/info/${id}`
      );
      setInfo(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getinfo();
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
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
          }}
        >
          watch
        </Text>
      </View>
      {/* <ScrollView> */}
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginTop: 20,
          backgroundColor: colorScheme === "dark" ? "#2B3467" : "#B4E4FF",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 150, padding: 10 }}
        />
        <View>
          <Text
            style={{
              color: colorScheme === "dark" ? "#fff" : "#000",
              fontSize: 20,
              width: 220,
              paddingLeft: 10,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          {info?.totalEpisodes && (
            <Text
              style={{
                color: colorScheme === "dark" ? "#fff" : "#000",
                fontSize: 16,
                paddingLeft: 10,
              }}
            >
              Total Episodes:
              {info?.totalEpisodes}
            </Text>
          )}
          {info?.type && (
            <Text
              style={{
                color: colorScheme === "dark" ? "#fff" : "#000",
                fontSize: 16,
                paddingLeft: 10,
              }}
            >
              Type:
              {info?.type}
            </Text>
          )}
        </View>
        <Icon
          name="playlist-add"
          style={{ paddingLeft: 10, marginTop: 120 }}
          color="white"
          onPress={() => {
            saveSearch(title, id, image);
            Alert.alert("Saved", "Added to library", [
              {
                text: "OK",
                style: "cancel",
              },
            ]);
          }}
        />
      </View>
      {loading && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator
            size="large"
            color={colorScheme === "dark" ? "#fff" : "#000"}
          />
        </View>
      )}
      <View
        style={{
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            color: colorScheme === "dark" ? "#fff" : "#000",
          }}
        >
          {info?.description?.length > 200
            ? info?.description.slice(0, 200) + "..."
            : info?.description}
        </Text>
        {info?.description?.length > 200 && (
          <Text
            style={{
              color: colorScheme === "dark" ? "#fff" : "#000",
            }}
            onPress={() => {
              Alert.alert("Synopsis", info?.description, [
                {
                  text: "OK",
                  style: "cancel",
                },
              ]);
            }}
          >
            Read More
          </Text>
        )}
      </View>
      <View>
        {info?.episodes?.length > 0 && (
          <Text
            style={{
              color: colorScheme === "dark" ? "#fff" : "#000",
              fontSize: 20,
            }}
          >
            Episodes
          </Text>
        )}
        {/* {info?.episodes?.map((ep, key) => (
            <EpisodeItem
              key={key}
              episodeId={ep.id}
              episodeName={ep.id}
              epNum={ep.number}
              image={image}
              animeName={title}
              animeId={id}
            />
          ))} */}
        <FlatList
          // refreshControl={
          //   <RefreshControl
          //     refreshing={loading}
          //     onRefresh={getinfo}
          //     colors={["#B4E4FF"]}
          //     // progressBackgroundColor="#B4E4FF"
          //   />
          // }
          data={info?.episodes}
          renderItem={({ item }) => (
            <EpisodeItem
              episodeId={item.id}
              episodeName={item.id}
              epNum={item.number}
              image={image}
              animeName={title}
              animeId={id}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default AnimeScreen;
