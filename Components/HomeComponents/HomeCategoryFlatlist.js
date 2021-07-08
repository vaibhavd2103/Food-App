import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { Colors, Font, Sizes } from "../../Constants/Constants";

const HomeCategoryFlatlist = () => {
    const category = [
      {
        name: "Indian",
        img: require("../../assets/Indian.png"),

        id: "1",
      },
      {
        name: "Veg",
        img: require("../../assets/veg.png"),

        id: "2",
      },
      {
        name: " Non-Veg",
        img: require("../../assets/nonveg.png"),
        id: "3",
      },
      {
        name: " Burger",
        img: require("../../assets/burger.png"),
        id: "4",
      },
      {
        name: " Pizza",
        img: require("../../assets/pizaa.png"),
        id: "5",
      },
      {
        name: " Breakfast",
        img: require("../../assets/breakfast.png"),
        id: "6",
      },
    ];
    return (
      <View style={{width:'100%', marginTop:10, marginLeft:10}}>
        <FlatList data={category} keyExtractor={(item) => item.id} horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                alignItems: "center",
                padding: 4,
              }}
            >
              <Image
                source={item.img}
                style={{ height: 80, width: 80, borderRadius: 80 }}
              />
              <Text
                style={{ ...Font.title, paddingTop: Sizes.padding, bottom: 5 }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );}}/>
      </View>
    );
}

export default HomeCategoryFlatlist

const styles = StyleSheet.create({})
