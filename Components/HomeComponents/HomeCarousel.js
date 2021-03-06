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
import { Colors, Font, Sizes } from "../../Constants/Constants";
import { AntDesign, Entypo, FontAwesome } from "react-native-vector-icons";

const HomeCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const data = [
    {
      id: "1",
      rate: "4.9",
      rateno: "289",
      img: {
        uri: "https://www.flavcity.com/wp-content/uploads/2018/05/healthy-meal-prep-recipes.jpg",
      },
      restaurant: "Nickel & Dinner",
      description:
        "Steamed, char-grilled, pan-fried, stir-fried, or slow-cooked.",
      duration: "30-45",
      amount: "free",
    },
    {
      id: "2",
      rate: "4.5",
      rateno: "275",
      img: {
        uri: "https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg",
      },
      restaurant: "Hayat",
      description: "smooth, silky, unctuous, coating, tender, and juicy",
      duration: "28-35",
      amount: "30",
    },
    {
      id: "3",
      rate: "4.3",
      rateno: "222",
      img: {
        uri: "https://assetcdn.buhlergroup.com/image/874601345621/1f9a88a855e0452cbb353b224459e4b7/-FJPG-C3252x1830%2C0%2C197-S3200x1800",
      },
      restaurant: "Novtel",
      description: "moky, spicy, fresh, oily, etc",
      duration: "30-40",
      amount: "10",
    },
    {
      id: "4",
      rate: "4.6",
      rateno: "211",
      img: {
        uri: "https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/feature-platter.jpg",
      },
      restaurant: "Origami",
      description: "sweet, salty, tart, pleasantly bitter.",
      duration: "30-35",
      amount: "free",
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
        renderItem={({ item, index }) => {
          return (
            <ImageBackground
              source={item.img}
              blurRadius={0}
              style={{
                width: width * 0.9,
                height: 230,
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
                  borderRadius: 10,
                  elevation: 10,
                  padding: 10,
                }}
              >
                <Text style={{ ...Font.title }}>{item.restaurant}</Text>
                <Text
                  style={{
                    ...Font.subtitle,
                    borderBottomWidth: 0.25,
                    borderBottomColor: Colors.subtitle,
                    paddingBottom: 5,
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.description}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesign name="star" size={18} color="yellow" />
                    <Text
                      style={{
                        ...Font.mini,
                        paddingLeft: 5,
                        color: Colors.primary,
                        fontWeight: "bold",
                      }}
                    >
                      {item.rate}
                    </Text>
                    <Text style={{ ...Font.mini, paddingLeft: 2 }}>
                      ({item.rateno})
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Entypo
                      name="stopwatch"
                      size={16}
                      color={Colors.subtitle}
                      style={{ paddingLeft: Sizes.padding }}
                    />
                    <Text style={{ ...Font.mini, paddingLeft: 5 }}>
                      {item.duration}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome
                      name="rupee"
                      size={15}
                      color={Colors.subtitle}
                    />
                    <Text style={{ ...Font.mini, paddingLeft: 5 }}>
                      {item.amount}
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          );
        }}
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
    paddingTop:Sizes.padding
  },
});
