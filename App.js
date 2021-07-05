import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Header } from "./Components/Components";
import { Colors } from "./Constants/Colors";

export default function App(props) {
  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Text style={{ color: Colors.secondaryColor }}>I M Header</Text>
        <Text>Walla habibi</Text>
      </Header>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
  },
});
