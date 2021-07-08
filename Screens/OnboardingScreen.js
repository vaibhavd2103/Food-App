import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Container } from "../Components/Components";
import { Colors, Sizes } from "../Constants/Constants";
import Swiper from "react-native-swiper";

const OnboardingScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Swiper autoplay={false} showsButtons={true} loop={false}>
        <View style={styles.slide}>
          <ImageBackground
            source={require("../assets/orderfood.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={{ paddingTop: 30 }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 40,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                ORDER ONLINE ON
              </Text>

              <Text
                style={{
                  color: Colors.accent,
                  fontSize: 40,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                HUNGREZY
              </Text>

              <Text
                style={{
                  color: Colors.secondary,
                  fontSize: 30,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: 10,
                }}
              >
                The flavours of your wish.
              </Text>
            </View>

            <TouchableOpacity
              style={styles.done}
              onPress={() => props.navigation.navigate("Login")}
            >
              <View>
                <Text style={{ color: Colors.primary, fontSize: 20 }}>
                  Skip
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.slide}>
          <ImageBackground
            source={require("../assets/ontheway.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={{ paddingTop: 50 }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 40,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                FOOD IN YOUR AREA
              </Text>

              <Text
                style={{
                  color: Colors.secondary,
                  fontSize: 25,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: 30,
                  padding: 10,
                }}
                numberOfLines={2}
              >
                Easy to order just take a bite out of hunger
              </Text>
            </View>

            <TouchableOpacity
              style={styles.done}
              onPress={() => props.navigation.navigate("Login")}
            >
              <View>
                <Text style={{ color: Colors.primary, fontSize: 20 }}>
                  Skip
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.slide}>
          <ImageBackground
            source={require("../assets/deliver.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={{ paddingTop: 50 }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 30,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Straight out of the oven to your doorstep
              </Text>

              <Text
                style={{
                  color: Colors.accent,
                  fontSize: 60,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: 20,
                }}
              >
                ENJOY!!
              </Text>
            </View>

            <TouchableOpacity
              style={styles.done}
              onPress={() => props.navigation.navigate("Login")}
            >
              <View>
                <Text style={{ color: Colors.primary, fontSize: 20 }}>
                  Done
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </Swiper>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slide: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  image: {
    height: Sizes.height + 100,
    width: Sizes.width,
  },
  skip: {
    height: 30,
    width: 70,
    backgroundColor: "white",
    position: "absolute",
    bottom: 10,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 0,
    borderColor: Colors.secondary,
    elevation: 5,
  },
  done: {
    height: 30,
    width: 70,
    backgroundColor: "white",
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 0,
    borderColor: Colors.secondary,
  },
});

//         <Onboarding
//   pages={[
//     {
//       backgroundColor:'white',
//       image: <Image
//       source = {require('../assets/fruits.png')}
//       style = {{height:600, width:'100%'}}
//       />,

//       title: 'Onboarding',
//       subtitle: 'Done with React Native Onboarding Swiper',
//     },
//     {
//       backgroundColor: 'red',
//       image: <Image source={{
//         uri:"https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs="
//       }}
//       style = {{height:100, width:100}}
//       />,
//       title: 'Onboarding',
//       subtitle: 'Done with React Native Onboarding Swiper',
//     },
//     {
//       backgroundColor: 'green',
//       image: <Image source={{
//         uri:'https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg'
//       }} />,
//       title: 'Onboarding',
//       subtitle: 'Done with React Native Onboarding Swiper',
//     },

//   ]}
// />
