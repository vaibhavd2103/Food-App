import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./AppNavigator/AppNavigator";
import { Container, Header } from "./Components/Components";
import { Colors } from "./Constants/Constants";
import OnboardingScreen from "./Screens/OnboardingScreen";
import SignUp from "./Screens/SignUp";


export default function App(props) {
  return <AppNavigator/>;
}

const styles = StyleSheet.create({});
