import { StatusBar } from "expo-status-bar";
import React from "react";
import Settings from "./Screens/Drawer Screens/Settings";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./AppNavigator/AppNavigator";
import { Container, Header } from "./Components/Components";
import { Colors } from "./Constants/Constants";
import OnboardingScreen from "./Screens/OnboardingScreen";
import HelpsFaqs from "./Screens/Drawer Screens/HelpsFaqs";





export default function App(props) {
  return <AppNavigator/>;
}

const styles = StyleSheet.create({});
