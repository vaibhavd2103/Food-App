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
  const [data, setData] = useState([
    {
      name: "Trending This Week",
      img: {
        uri: "https://www.useyournoodles.eu/wp-content/uploads/how-to-take-the-perfect-action-shot-in-food-photograpy-01-Custom-1000x423.jpg",
      },
      id: "1",
    },
    {
      name: "For The \n Family",
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
      name: "Most Romantic Restaurants",
      img: {
        uri: "https://www.piladekhilade.com/images/valentines2.jpg",
      },
      id: "4",
    },
    {
      name: "Best Of \n Pune",
      img: {
        uri: "https://static2.tripoto.com/media/filter/tst/img/306524/TripDocument/1499944726_img_20170713_164256_224.jpg",
      },
      id: "5",
    },
  ]);
  return (
    <View style={styles.container}>
   
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={{width:'100%',}}
         
        ListHeaderComponent={({ item, index }) => {
          return (
            <View>
              <SearchCarousel navigation={props.navigation} />
              <SearchFoodList navigation={props.navigation} />
              <Text
                 style={{
                      ...Font.header,
                      color: "black",
                      paddingLeft: Sizes.padding,
                      paddingTop: Sizes.padding,
                  }}
              >
                    Curated Collection
              </Text>
            </View>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <Surface style={styles.surface}>
              
              <TouchableOpacity onPress={() => {}} >
                <ImageBackground
                  source={item.img}
                  style={{
                    height:230,
                    width:'100%',
                    padding: Sizes.padding,
                    flexDirection: "column-reverse",
                 
                  
                  }}
                  blurRadius={0.5}
                  borderRadius={20}
                >
                  <View style={{backgroundColor:Colors.accent,opacity:0.7,borderRadius:10,width:80 }}>
                  <Text
                    style={{
                      ...Font.title,
                      fontWeight: "bold",
                      color: 'black',

                      //   color: "black",
                    }}
                  >
                    {item.name}
                  </Text>
                  </View>
                </ImageBackground>
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
    height: "100%",
    width: "100%",
    paddingTop:40
   
    
  },
  surface: {
    width: "100%",
    padding: 5,
 
    justifyContent: "center",
    marginVertical:5,
  
    
    
  },
});
