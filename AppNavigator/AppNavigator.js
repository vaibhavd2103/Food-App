import React from "react";
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
import { SimpleLineIcons } from "react-native-vector-icons";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#4585FF",
        // Floating Tab Bar...
        style: {
          backgroundColor: Colors.primary,

          // Max Height...
          height: 70,
          borderRadius: 10,
          // Shadow...
          elevation: 15,
          shadowColor: "#000000",
          shadowOffset: { width: 5, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 0,
          paddingHorizontal: 0,
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
            return <TouchableOpacity></TouchableOpacity>;
          },
        }}
      />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
