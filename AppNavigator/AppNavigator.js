import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../BottomTabScreens/Home";
import Search from "../BottomTabScreens/Search";
import Cart from "../BottomTabScreens/Cart";
import { Colors } from "../Constants/Constants";
import {
  SimpleLineIcons,
  AntDesign,
  Ionicons,
  FontAwesome5,
} from "react-native-vector-icons";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
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
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

function BottomTab(props) {
  const [selected, setSelected] = useState("");

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#4585FF",
        // Floating Tab Bar...
        style: {
          backgroundColor: Colors.primary,

          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          elevation: 15,
          shadowColor: "#000000",
          shadowOffset: { width: 5, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 0,
          paddingHorizontal: 20,
          width: "90%",
          alignSelf: "center",
          position: "absolute",
          bottom: 20,
          left: "5%",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return (
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
                  bottom: selected === "home" ? 25 : 0,
                  elevation: selected === "home" ? 10 : 0,
                }}
              >
                {selected === "home" ? (
                  <Ionicons name="home" size={28} color={Colors.accent} />
                ) : (
                  <Ionicons name="home-outline" size={24} color="white" />
                )}
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => {
            return (
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
                  bottom: selected === "search" ? 25 : 0,
                  elevation: selected === "search" ? 10 : 0,
                }}
              >
                {selected === "search" ? (
                  <FontAwesome5 name="search" size={24} color={Colors.accent} />
                ) : (
                  <Ionicons name="search-outline" size={24} color="white" />
                )}
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => {
            return (
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
                  bottom: selected === "cart" ? 25 : 0,
                  elevation: selected === "cart" ? 10 : 0,
                }}
              >
                {selected === "cart" ? (
                  <Ionicons name="cart-sharp" size={28} color={Colors.accent} />
                ) : (
                  <Ionicons name="cart-outline" size={24} color="white" />
                )}
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
