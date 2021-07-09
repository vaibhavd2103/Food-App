import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Container, Header } from "../Components/Components";
import { Colors, Font, Sizes } from "../Constants/Constants";
import { StatusBar } from "expo-status-bar";
import HomeCarousel from "../Components/HomeComponents/HomeCarousel";
import ResturantFlatlist from "../Components/HomeComponents/ResturantFlatlist";

const Home = (props) => {
  return (
    <Container>
      <StatusBar style="light" />
      <Header
        style={{
          justifyContent: "flex-start",
          paddingHorizontal: Sizes.padding,
        }}
      ><TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Avatar.Image
          source={{
            uri: "https://i.pinimg.com/474x/75/66/57/756657573134baeb9cdbe188195967e7--sexy-men-hot-men.jpg",
          }}
          size={35}
        />
        </TouchableOpacity>
        <Text style={{ ...Font.header, paddingLeft: 15, color: "white" }}>
          Hungrezy
        </Text>
      </Header>

      {/* <HomeCarousel navigation={props.navigation} /> */}
      <ResturantFlatlist navigation={props.navigation} />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
