import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../BottomTabScreens/Home";
import Search from "../BottomTabScreens/Search";
import EditProfile from "../Screens/Drawer Screens/EditProfile";
import Cart from "../BottomTabScreens/Cart";
import { Colors, Font, Sizes } from "../Constants/Constants";
import {
  SimpleLineIcons,
  AntDesign,
  Ionicons,
  FontAwesome5,
} from "react-native-vector-icons";
import { Avatar } from "react-native-paper";
import OnboardingScreen from "../Screens/OnboardingScreen";
/* -----------------------Drawer navigation structure--------------------------*/
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyOrders from "./../Screens/Drawer Screens/MyOrders";
import MyProfile from "./../Screens/Drawer Screens/MyProfile";
import PaymentMethods from "./../Screens/Drawer Screens/PaymentMethods";
import ContactUs from "./../Screens/Drawer Screens/ContactUs";
import Settings from "./../Screens/Drawer Screens/Settings";
import HelpsFaqs from "./../Screens/Drawer Screens/HelpsFaqs";
import { DrawerContent } from "./../Components/DrawerContent";

/* -----------------------HomeTabScreens structure--------------------------*/

import Indian from "../Screens/HomeTabScreens/Indian";
import BreakFast from "../Screens/HomeTabScreens/BreakFast";
import Veg from "../Screens/HomeTabScreens/Veg";
import NonVeg from "../Screens/HomeTabScreens/NonVeg";
import Pizza from "../Screens/HomeTabScreens/Pizza";
import Burger from "../Screens/HomeTabScreens/Burger";
import { Header } from "../Components/Components";
import HomeCarousel from "../Components/HomeComponents/HomeCarousel";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="OnboardingScreen">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />

          {/* <Stack.Screen
         name="BottomTabStack"
         component={BottomTabStack}
         options={{
         headerShown: false,
          }}
         /> */}

          <Stack.Screen
            name="HomeScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="HelpsFaqs"
            component={HelpsFaqs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const TabStack = createStackNavigator();

function BottomTabStack(props) {
  const [selected, setSelected] = useState("home");
  return (
    <>
      <TabStack.Navigator>
        <TabStack.Screen
          name="Home"
          component={HomeCatog}
          options={{
            headerShown: false,
          }}
        />
        <TabStack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <TabStack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
      </TabStack.Navigator>
      <View
        style={{
          width: "90%",
          height: 75,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "flex-end",
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 60,
            backgroundColor: Colors.primary,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            alignSelf: "center",
            elevation: 10,
            borderRadius: 10,
            marginTop: 0,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Home");
              setSelected("home");
            }}
            style={{
              position: "relative",
              height: selected === "home" ? 60 : 60,
              width: selected === "home" ? 60 : 60,
              borderRadius: 100,
              backgroundColor:
                selected === "home" ? Colors.secondary : "transparent",
              justifyContent: "center",
              alignItems: "center",
              bottom: selected === "home" ? 15 : 0,
              elevation: selected === "home" ? 10 : 0,
            }}
          >
            {selected === "home" ? (
              <Ionicons name="home" size={28} color={Colors.accent} />
            ) : (
              <Ionicons name="home-outline" size={24} color="white" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Search");
              setSelected("search");
            }}
            style={{
              position: "relative",
              height: selected === "search" ? 60 : 60,
              width: selected === "search" ? 60 : 60,
              borderRadius: 100,
              backgroundColor:
                selected === "search" ? Colors.secondary : "transparent",
              justifyContent: "center",
              alignItems: "center",
              bottom: selected === "search" ? 15 : 0,
              elevation: selected === "search" ? 10 : 0,
            }}
          >
            {selected === "search" ? (
              <FontAwesome5 name="search" size={24} color={Colors.accent} />
            ) : (
              <Ionicons name="search-outline" size={24} color="white" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Cart");
              setSelected("cart");
            }}
            style={{
              position: "relative",
              height: selected === "cart" ? 60 : 60,
              width: selected === "cart" ? 60 : 60,
              borderRadius: 100,
              backgroundColor:
                selected === "cart" ? Colors.secondary : "transparent",
              justifyContent: "center",
              alignItems: "center",
              bottom: selected === "cart" ? 15 : 0,
              elevation: selected === "cart" ? 10 : 0,
            }}
          >
            {selected === "cart" ? (
              <Ionicons name="cart-sharp" size={28} color={Colors.accent} />
            ) : (
              <Ionicons name="cart-outline" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const HomeCategory = createStackNavigator();

function HomeCatog(props) {
  const category = [
    {
      name: "Indian",
      img: require("../assets/Indian.png"),

      id: "1",
    },
    {
      name: "Veg",
      img: require("../assets/veg.png"),

      id: "2",
    },
    {
      name: "NonVeg",
      img: require("../assets/nonveg.png"),
      id: "3",
    },
    {
      name: "Burger",
      img: require("../assets/burger.png"),
      id: "4",
    },
    {
      name: "Pizza",
      img: require("../assets/pizaa.png"),
      id: "5",
    },
    {
      name: "BreakFast",
      img: require("../assets/breakfast.png"),
      id: "6",
    },
  ];
  return (
    <>
      <Header
        style={{
          justifyContent: "flex-start",
          paddingHorizontal: Sizes.padding,
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
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
      {/* <ResturantFlatlist navigation={props.navigation} /> */}
      <HomeCarousel navigation={props.navigation} />
      {/* <HomeCategoryFlatlist navigation={props.navigation} /> */}
      <View style={{ height: 120, backgroundColor:'green' }}>
        <FlatList
          data={category}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={{ backgroundColor: "white", height: 10 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  alignItems: "center",
                  padding: 4,
                  height: 120,
                }}
                onPress={() => {
                  // console.log(item.name);
                  props.navigation.navigate(item.name);
                }}
              >
                <Image
                  source={item.img}
                  style={{ height: 80, width: 80, borderRadius: 80 }}
                />
                <Text
                  style={{
                    ...Font.title,
                    paddingTop: Sizes.padding,
                    bottom: 5,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <HomeCategory.Navigator>
        <HomeCategory.Screen
          name="Indian"
          component={Indian}
          options={{
            headerShown: false,
          }}
        />
        <HomeCategory.Screen
          name="Veg"
          component={Veg}
          options={{
            headerShown: false,
          }}
        />
        <HomeCategory.Screen
          name="NonVeg"
          component={NonVeg}
          options={{
            headerShown: false,
          }}
        />
        <HomeCategory.Screen
          name="Burger"
          component={Burger}
          options={{
            headerShown: false,
          }}
        />
        <HomeCategory.Screen
          name="Pizza"
          component={Pizza}
          options={{
            headerShown: false,
          }}
        />
        <HomeCategory.Screen
          name="BreakFast"
          component={BreakFast}
          options={{
            headerShown: false,
          }}
        />
      </HomeCategory.Navigator>
    </>
  );
}

// const Tab = createBottomTabNavigator();

// function BottomTab(props) {
//   const [selected, setSelected] = useState("home");

//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         showLabel: false,
//         activeTintColor: "#4585FF",
//         // Floating Tab Bar...
//         style: {
//           backgroundColor: Colors.primary,

//           // Max Height...
//           height: 60,
//           borderRadius: 10,
//           // Shadow...
//           elevation: 15,
//           shadowColor: "#000000",
//           shadowOffset: { width: 5, height: 10 },
//           shadowOpacity: 1,
//           shadowRadius: 0,
//           paddingHorizontal: 20,
//           width: "90%",
//           alignSelf: "center",
//           position: "absolute",
//           bottom: 10,
//           left: "5%",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: () => {
//             return (
//               <TouchableOpacity
//                 onPress={() => {
//                   props.navigation.navigate("Home");
//                   setSelected("home");
//                 }}
//                 style={{
//                   position: "relative",
//                   height: selected === "home" ? 60 : 60,
//                   width: selected === "home" ? 60 : 60,
//                   borderRadius: 100,
//                   backgroundColor:
//                     selected === "home" ? Colors.secondary : "transparent",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   // bottom: selected === "home" ? 15 : 0,
//                   elevation: selected === "home" ? 10 : 0,
//                 }}
//               >
//                 {selected === "home" ? (
//                   <Ionicons name="home" size={28} color={Colors.accent} />
//                 ) : (
//                   <Ionicons name="home-outline" size={24} color="white" />
//                 )}
//               </TouchableOpacity>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={Search}
//         options={{
//           tabBarIcon: () => {
//             return (
//               <TouchableOpacity
//                 onPress={() => {
//                   props.navigation.navigate("Search");
//                   setSelected("search");
//                 }}
//                 style={{
//                   position: "relative",
//                   height: selected === "search" ? 60 : 60,
//                   width: selected === "search" ? 60 : 60,
//                   borderRadius: 100,
//                   backgroundColor:
//                     selected === "search" ? Colors.secondary : "transparent",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   // bottom: selected === "search" ? 15 : 0,
//                   elevation: selected === "search" ? 10 : 0,
//                 }}
//               >
//                 {selected === "search" ? (
//                   <FontAwesome5 name="search" size={24} color={Colors.accent} />
//                 ) : (
//                   <Ionicons name="search-outline" size={24} color="white" />
//                 )}
//               </TouchableOpacity>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Cart"
//         component={Cart}
//         options={{
//           tabBarIcon: () => {
//             return (
//               <TouchableOpacity
//                 onPress={() => {
//                   props.navigation.navigate("Cart");
//                   setSelected("cart");
//                 }}
//                 style={{
//                   position: "relative",
//                   height: selected === "cart" ? 60 : 60,
//                   width: selected === "cart" ? 60 : 60,
//                   borderRadius: 100,
//                   backgroundColor:
//                     selected === "cart" ? Colors.secondary : "transparent",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   // bottom: selected === "cart" ? 15 : 0,
//                   elevation: selected === "cart" ? 10 : 0,
//                 }}
//               >
//                 {selected === "cart" ? (
//                   <Ionicons name="cart-sharp" size={28} color={Colors.accent} />
//                 ) : (
//                   <Ionicons name="cart-outline" size={24} color="white" />
//                 )}
//               </TouchableOpacity>
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

/* --------------------------------Drawer Stack Stack ------------------------------------------- */
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home1"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      {/* <Drawer.Screen name="BottomTab" component={BottomTab} /> */}
      <Drawer.Screen name="Home1" component={BottomTabStack} />
      <Drawer.Screen name="MyOrders" component={MyOrders} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="PaymentMethods" component={PaymentMethods} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="HelpsFaqs" component={HelpsFaqs} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
