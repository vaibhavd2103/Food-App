import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Container } from "../Components/Components";
import { Colors } from "../Constants/Constants";

const Home = (props) => {
  return (
    <Container>
      <Text style={{ color: Colors.accent }}>Home Screen</Text>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
