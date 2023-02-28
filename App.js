import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SearchScreen from "./screens/SearchScreen";
import { Icon } from "@rneui/base";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import BrowseScreen from "./screens/BrowseScreen";
import LibraryScreen from "./screens/LibraryScreen";
import AboutScreen from "./screens/extras/AboutScreen";
import AnimeScreen from "./screens/AnimeScreen";
import EpisodeScreen from "./screens/EpisodeScreen";
import GenereScreen from "./screens/GenereScreen";
import AccountScreen from "./screens/extras/AccountScreen";
import TranslationScreen from "./screens/extras/TranslationScreen";
import Splash from "./screens/Splash";
import AuthScreen from "./screens/auth/AuthScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // if (loading) {
  //   return <Splash />;
  // }
  return (
    <NavigationContainer>
      <ExpoStatusBar style="auto" />
      <Stack.Navigator>
        {loading ? (
          <Stack.Screen
            name="Tabs"
            options={{
              headerShown: false,
            }}
            component={Splash}
          />
        ) : (
          <Stack.Screen
            name="Tabs"
            options={{
              headerShown: false,
            }}
            component={Tabs}
          />
        )}
        <Stack.Screen
          name="Auth"
          options={{
            headerShown: false,
          }}
          component={AuthScreen}
        />
        <Stack.Screen
          name="Anime"
          options={{
            headerShown: false,
          }}
          component={AnimeScreen}
        />
        <Stack.Screen
          name="Episode"
          options={{
            headerShown: false,
          }}
          component={EpisodeScreen}
        />
        <Stack.Screen
          name="Search"
          options={{
            headerShown: false,
          }}
          component={SearchScreen}
        />
        <Stack.Screen
          name="Genere"
          options={{
            headerShown: false,
          }}
          component={GenereScreen}
        />
        <Stack.Screen
          name="Translations"
          options={{
            headerShown: false,
          }}
          component={TranslationScreen}
        />
        <Stack.Screen
          name="About"
          options={{
            headerShown: false,
          }}
          component={AboutScreen}
        />
        <Stack.Screen
          name="Account"
          options={{
            headerShown: false,
          }}
          component={AccountScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  const scheme = useColorScheme();
  return (
    <Tab.Navigator
      style={{ backgroundColor: scheme === "dark" ? "#171717" : "#fff" }}
      sceneAnimationEnabled="true"
      sceneAnimationType="shifting"
      initialRouteName="Home"
      barStyle={{
        backgroundColor: scheme === "dark" ? "#171717" : "#fff",
      }}
      activeColor={scheme === "dark" ? "#fff" : "#272121"}
      keyboardHidesNavigationBar={true}
      backBehavior="none"
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Browse"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="category" size={24} color={color} />
          ),
        }}
        component={BrowseScreen}
      />
      <Tab.Screen
        name="library"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="video-library" size={24} color={color} />
          ),
        }}
        component={LibraryScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings" size={24} color={color} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
