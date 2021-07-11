import React, { useState } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

import { Surface } from "react-native-paper";
import { FontAwesome, MaterialIcons, Entypo } from "react-native-vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { Colors, Font, Sizes } from "../../Constants/Constants";
import HomeCarousel from "./HomeCarousel";
import HomeCategoryFlatlist from "./HomeCategoryFlatlist";

export default function ResturantFlatlist(props) {
  const restaurant= [
    {
      name: "Meals 101",
      title: "Chinese, Nort Indian",
      rating: "3.7",
      price: "200 for one",
      img: {
        uri: "https://static.toiimg.com/photo/76942221.cms",
      },
      offer:true,
      id: "1",
    },
    {
      name: "Burger King",
      title: "Burger, Fast Food",
      rating: "4.7",
      price: "200 for one",
      img: {
        uri: "https://st2.depositphotos.com/1020618/8867/i/600/depositphotos_88670080-stock-photo-close-up-of-home-made.jpg",
      },offer:false,
      id: "2",
    },
    {
      name: "The Irani Cafe",
      title: "Fast Food",
      rating: "4.5",
      price: "200 for one",
      img: {
        uri: "https://i.ytimg.com/vi/ogB4Y3dmODQ/maxresdefault.jpg",
      },
      offer:true,
      id: "3",
    },
    {
      name: "Pizza Hut",
      title: "Pizza, Fast Food",
      rating: "4.7",
      price: "200 for one",
      img: {
        uri: "https://images.indulgexpress.com/uploads/user/imagelibrary/2018/11/2/original/285A5419.JPG?w=360&dpr=2.6",
      },
      offer:false,
      id: "4",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={restaurant}
        style={{ width: "100%" }}
        ListHeaderComponent={({ item, index }) => {
          return (
            <Text style={{ ...Font.title, paddingLeft: Sizes.padding }}>
              1065 resturants around you
            </Text>
          );
        }}
        ListFooterComponent={({ item, index }) => {
          return (
            <View style={{ height:450 , width:'100%'}}>
              
            </View>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{ width: "100%", paddingHorizontal: Sizes.padding }}
              activeOpacity={0.8}
            >
              <View style={styles.surface}>
                <ImageBackground
                  imageStyle={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  style={{
                    width: "100%",
                    height: 170,
                    justifyContent: "space-between",
                  }}
                  source={item.img}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: 0,
                      paddingVertical: 10,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: Colors.accent,
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        width: 50,
                        height: 20,
                      }}
                    >
                      <Text style={{ ...Font.subtitle, color: Colors.title }}>
                        30 mins
                      </Text>
                    </View>
                  </View>
                </ImageBackground>

                {/*------------------------------- text in card part1----------------------------------*/}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    height: 28,
                    width: "100%",
                    paddingHorizontal: 10,
                    paddingTop: 5,
                    backgroundColor: "white",
                  }}
                >
                  <View style={{}}>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 13,
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 5,
                      backgroundColor: "green",
                      height: 20,
                      borderRadius: 5,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 13, padding: 2 }}>
                      {item.rating}
                      {"  "}
                    </Text>
                    <FontAwesome name="star" size={10} color="white" />
                  </View>
                </View>

                {/*------------------------------- text in card part2 ----------------------------------*/}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 20,
                    width: "100%",
                    paddingHorizontal: 10,
                    paddingVertical: 0,

                    backgroundColor: "white",
                  }}
                >
                  <View>
                    <Text
                      style={{ color: "#000", fontSize: 11, lineHeight: 15 }}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 5,
                      paddingVertical: 3,
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome
                      name="rupee"
                      size={10}
                      color="#000"
                      style={{ marginLeft: 0, marginTop: 2 }}
                    />
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 11,
                        lineHeight: 15,
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    paddingBottom: 100,
    backgroundColor: "white",
    
  },
  surface: {
    width: "100%",

    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    height: 230,
    marginVertical: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 15,
  },
});