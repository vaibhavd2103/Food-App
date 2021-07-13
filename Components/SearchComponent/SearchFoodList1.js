import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import { Colors, Font, Sizes } from "../../Constants/Constants";
import SearchFoodList from "../SearchComponent/SearchFoodList";
import SearchCarousel from '../SearchComponent/SearchCarousel';

export default function SearchFoodList1(props) {
  const data = [
    {
      name: "Trending this week",
      img: {
        uri: "https://www.useyournoodles.eu/wp-content/uploads/how-to-take-the-perfect-action-shot-in-food-photograpy-01-Custom-1000x423.jpg",
      },
      id: "1",
    },
    {
      name: "The Family",
      img: {
        uri: "https://75580cde83d35dc00a05-20f670a5827f41ce9e85089eb012f48c.ssl.cf1.rackcdn.com/Velvet_Restaurant_Dinner.jpg",
      },
      id: "2",
    },
    {
      name: " Sweet Tooth",
      img: {
        uri: "https://michaelmichaels.com/wp-content/uploads/2019/02/Chocolate-Muffin-062-683x1024.jpg",
      },
      id: "3",
    },
    {
      name: "Romantic ",
      img: {
        uri: "https://www.piladekhilade.com/images/valentines2.jpg",
      },
      id: "4",
    },
    {
      name: "Best Of Pune",
      img: {
        uri: "https://static2.tripoto.com/media/filter/tst/img/306524/TripDocument/1499944726_img_20170713_164256_224.jpg",
      },
      id: "5",
    },
  ];
  return (
    <View style={styles.container}>
   
      <FlatList
        keyExtractor={(item) => item.id}
        data={data} 
        numColumns={2}
        ListFooterComponent={({item, index})=>{
          return(
            <View style={{height:150}}></View>
          )
        }}
        ListHeaderComponent={({ item, index }) => {
          return (
            <View>
              <SearchCarousel navigation={props.navigation} />
              <SearchFoodList navigation={props.navigation} />
              <Text
                style={{
                  ...Font.title,
                  paddingLeft: Sizes.padding + 5,
                }}
              >
                Curated Collection
              </Text>
            </View>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={{ backgroundColor: "white", alignItems: "center" , width:'50%', padding:10}}>
              <TouchableOpacity onPress={() => {}} style={styles.surface}>
                <ImageBackground
                  source={item.img}
                  style={{
                    height: "100%",
                    width: "100%",
                    // padding: Sizes.padding,
                    alignSelf:'center'
                  }}
                  blurRadius={0.5}
                  borderTopRightRadius={20}
                  borderBottomLeftRadius={20}
                >
                  <View
                    style={{
                      backgroundColor: Colors.secondary,
                      borderRadius: 10,
                      width: 80,
                      padding:3,top:10,
                      left:5
                    }}
                  >
                    <Text
                      style={{
                        ...Font.subtitle,color:'white'
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          );
          
        }}
      />
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  surface: {
   
    
    backgroundColor: "white",
    borderRadius: 15,
    width: "100%",
    height: 110,
    borderRadius: 10,
    alignSelf:'center',
    alignItems:'center'
  },
});
