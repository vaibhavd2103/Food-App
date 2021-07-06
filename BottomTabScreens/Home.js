import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Container } from "../Components/Components";
import { Colors, Font, Sizes } from "../Constants/Constants";

const Home = (props) => {
  return (
    <Container style={{ paddingTop: 10 }}>
      <View style={styles.search}></View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  search: {
    width: Sizes.width - Sizes.padding,
    backgroundColor: "white",
    height: 45,
    borderRadius: 10,
    borderBottomWidth: 1,
    elevation: 5,
    alignSelf: "center",
  },
});
