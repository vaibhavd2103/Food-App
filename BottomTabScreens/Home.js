import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Container, Header } from "../Components/Components";
import { Colors, Font, Sizes } from "../Constants/Constants";
import { StatusBar } from "expo-status-bar";
import HomeCarousel from "../Components/HomeComponents/HomeCarousel";
import ResturantFlatlist from "../Components/HomeComponents/ResturantFlatlist";
import HomeCategoryFlatlist from "../Components/HomeComponents/HomeCategoryFlatlist";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
/* -----------------------HomeTabScreens structure--------------------------*/

import Indian from "../Screens/HomeTabScreens/Indian";
import BreakFast from "../Screens/HomeTabScreens/BreakFast";
import Veg from "../Screens/HomeTabScreens/Veg";
import NonVeg from "../Screens/HomeTabScreens/NonVeg";
import Pizza from "../Screens/HomeTabScreens/Pizza";
import Burger from "../Screens/HomeTabScreens/Burger";

const Stack = createStackNavigator();

const Home = (props) => {
  const category = [
    {
      name: "Indian",
      img: require("../assets/Indian.png"),

      id: "1",
    },
    {
      name: "Veg",
      img: require("../assets/veg.png"),

      id: "2",
    },
    {
      name: "NonVeg",
      img: require("../assets/nonveg.png"),
      id: "3",
    },
    {
      name: "Burger",
      img: require("../assets/burger.png"),
      id: "4",
    },
    {
      name: "Pizza",
      img: require("../assets/pizaa.png"),
      id: "5",
    },
    {
      name: "BreakFast",
      img: require("../assets/breakfast.png"),
      id: "6",
    },
  ];
  return (
    <>
      <Container>
        <StatusBar style="light" />
        
      </Container>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
