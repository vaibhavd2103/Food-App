import { StyleSheet, Dimensions } from "react-native";

export const Colors = {
  primary: "#283149",
  secondary: "#404B69",
  accent: "#F73859",
  text: "#DBEDF3",
  title: "white",
  subtitle: "#a1a1a1",
  black: "black",
};

export const Font = {
  header: 18,
  title: 14,
  subtitle: 12,
  mini: 9,
};

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const Sizes = {
  padding: 10,
  margin: 15,
  height: height,
  width: width,
};
