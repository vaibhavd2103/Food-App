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

export const Font = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
    // fontFamily: "Nunito-SemiBoldItalic",
  },
  title: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 14,
  },
  subtitle: {
    color: Colors.secondary,
    fontSize: 12,
  },
  mini: {
    fontSize: 10,
    color: Colors.subtitle,
  },
});

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const Sizes = {
  padding: 10,
  margin: 15,
  height: height,
  width: width,
};
