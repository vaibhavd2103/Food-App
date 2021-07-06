import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { StatusBar } from "expo-status-bar";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { Colors, Font, Sizes } from "../Constants/Constants";

const HomeCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const data = [
    {
      id: "1",
      img: {
        uri: "https://www.flavcity.com/wp-content/uploads/2018/05/healthy-meal-prep-recipes.jpg",
      },
      restaurant: "Nickel & Dinner",
      description: "American Traditional, Breakfast",
    },
    {
      id: "2",
      img: {
        uri: "https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg",
      },
      restaurant: "Hayat",
      description: "All categories",
    },
    {
      id: "3",
      img: {
        uri: "https://assetcdn.buhlergroup.com/image/874601345621/1f9a88a855e0452cbb353b224459e4b7/-FJPG-C3252x1830%2C0%2C197-S3200x1800",
      },
      restaurant: "Novtel",
      description: "Italian, snack",
    },
    {
      id: "4",
      img: {
        uri: "https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/feature-platter.jpg",
      },
      restaurant: "Origami",
      description: "Family Resto",
    },
  ];

  return (
    <View style={styles.carouselContainer}>
      <StatusBar style="dark" />
      <Carousel
        style={{}}
        contentContainerStyle={{ alignItems: "center" }}
        layout="default"
        layoutCardOffset={0}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <ImageBackground
              source={item.img}
              blurRadius={0}
              style={{
                width: width * 0.9,
                height: 280,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              imageStyle={{ borderRadius: 20 }}
            >
              <View
                style={{
                  width: width * 0.8,
                  height: 90,
                  backgroundColor: "white",
                  marginBottom: 15,
                  borderRadius: 20,
                  elevation: 10,
                  padding: 10,
                }}
              >
                <Text style={{ ...Font.header }}>{item.restaurant}</Text>
                <Text style={{ ...Font.title }}>{item.description}</Text>
              </View>
            </ImageBackground>
          );
        }}
        sliderWidth={width + 100}
        itemWidth={width * 0.9}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        enableSnap={true}
        loop={true}
        autoplay={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayDelay={1000}
        autoplayInterval={2000}
      />
    </View>
  );
};

export default HomeCarousel;

const styles = StyleSheet.create({
  carouselContainer: {
    width: width,
    // height:height / 4.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
