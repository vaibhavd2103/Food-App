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
import HomeCarousel from './../Components/HomeCarousel';

const Home = (props) => {
  return (
    <Container style={{ paddingTop: 30 }}>
      <StatusBar style="dark" />
      <HomeCarousel navigation={props.navigation} />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
