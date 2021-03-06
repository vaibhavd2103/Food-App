import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../Constants/Constants";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Container = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const Header = (props) => {
  return (
    <View style={{ ...styles.header, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height + 50,
    alignItems: "center",
    backgroundColor: Colors.title,
  },
  header: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    width: width,
    height: 60,
    alignItems: "center",
  },
});

export { Container, Header };
