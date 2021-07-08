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
import SearchCarousel from "./../Components/SearchCarousel";
import SearchFoodList from "./../Components/SearchFoodList";
import SearchFoodList1 from "./../Components/SearchFoodList1";

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
