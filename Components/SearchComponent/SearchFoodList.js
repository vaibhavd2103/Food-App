import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

import { Font, Sizes } from "../../Constants/Constants";

import SearchFoodList1 from "./SearchFoodList1";

export default function PopularRadioList(props) {
  const [data, setData] = useState([
    {
      name: "Breakfast",
      img: {
        uri: "https://experiencetheflavour.files.wordpress.com/2016/12/wp-1482418673495.jpg?w=720",
      },
      id: "1",
    },
    {
      name: "Lunch",
      img: {
        uri: "https://i.pinimg.com/736x/d9/53/ab/d953abcc2c37b2b38dd0b1e1a66743a4.jpg",
      },
      id: "2",
    },
    {
      name: " Snacks",
      img: {
        uri: "https://assets1.storebrands.com/sb/styles/content_sm/s3/salty%20snacks%20pretzels%20nuts%20crackers.jpg?itok=yX3PAHD2",
      },
      id: "3",
    },

    {
      name: "Dinner",
      img: {
        uri: "https://media-cdn.tripadvisor.com/media/photo-s/16/96/5b/99/dinner.jpg",
      },
      id: "4",
    },
    {
      name: "Fast Food",
      img: {
        uri: "https://previews.123rf.com/images/topntp/topntp1603/topntp160301926/53685712-fast-food-and-junk-food-concept-on-white-background.jpg",
      },
      id: "5",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...Font.header,

          color: "black",
          paddingLeft: Sizes.padding,
          // paddingTop: Sizes.padding,
        }}
      >
        Food
      </Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Surface style={styles.surface}>
              <TouchableOpacity
                onPress={() => {}}
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <View
                  style={{
                    width: 68,
                    height: 68,
                    elevation: 20,
                    borderRadius: 200,
                    elevation: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "black"
                  }}
                >
                  <Image
                    style={{ width: 65, height: 65, borderRadius: 200 }}
                    source={item.img}
                  />
                </View>
                
                <Text
                  style={{ ...Font.title}}
                >
                  {item.name}
                </Text>
                
              </TouchableOpacity>
            </Surface>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: "100%",
    backgroundColor: "transparent",
   
  },
  surface: {
    width: 80,
    padding: 5,
    backgroundColor: "transparent",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
