import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from 'react-native-snap-carousel';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const MainCarousel = (props) => {

const data = [
  {
    id: "1",
    img: {
      uri: "https://tse1.mm.bing.net/th?id=OIP.SoB8jyncUVUlWIEls-1-CQHaEK&pid=Api&P=0&w=309&h=175",
    },
    food: "Momos",
    description: "Fast food",
  },
  {
    id: "2",
    img: {
      uri: "https://tse3.mm.bing.net/th?id=OIP.AW1f76Ufpo8qa_hMyjazpgHaFF&pid=Api&P=0&w=254&h=175",
    },
    food: "Pizza",
    description: "Fast food",
  },
  {
    id: "3",
    img: {
      uri: "https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/master/pass/Burgers-Mumbai-Delivery.jpg",
    },
    food: "Burger",
    description: "Fast food",
  },
];

    return (
        <View style={styles.carouselContainer}>
           
        </View>
    )
}

export default MainCarousel

const styles = StyleSheet.create({
  carouselContainer: {
    width: width / 1.05,
    height:height / 2.5,
    
  },
});
