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
import { StatusBar } from "expo-status-bar";

import SearchCarousel from "../Components/SearchComponent/SearchCarousel";
const Home = (props) => {
  return (
    <Container>
      <StatusBar style="light" />
      <SearchCarousel navigation={props.navigation} />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
