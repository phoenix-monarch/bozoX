import * as Linking from "expo-linking";

export const openLink = async (url) => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log("error");
  }
};
