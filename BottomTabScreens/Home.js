import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Container , Header} from "../Components/Components";
import { Colors, Font, Sizes } from "../Constants/Constants";
import { StatusBar } from "expo-status-bar";
import HomeCarousel from '../Components/HomeComponents/HomeCarousel';
import ResturantFlatlist from '../Components/HomeComponents/ResturantFlatlist';

const Home = (props) => {
  return (
    <Container style={{ paddingTop: Sizes.padding * 4 }}>
      <StatusBar style="dark" />
      <Header style={{ justifyContent: "space-between", paddingHorizontal:Sizes.padding }}>
        <Text style={{ ...Font.Header }}>Hungerezi</Text>
        <Avatar.Image
          source={{
            uri: "https://i.pinimg.com/474x/75/66/57/756657573134baeb9cdbe188195967e7--sexy-men-hot-men.jpg",
          }}
          size={35}
        />
      </Header>

      <HomeCarousel navigation={props.navigation} />
      <ResturantFlatlist naviagtion ={props.navigation}/>
      
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
