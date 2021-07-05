import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Container } from "../Components/Components";
import { Colors } from "../Constants/Constants";

const Cart = (props) => {
  return (
    <Container>
      <Text style={{ color: Colors.accent }}>Cart Screen</Text>
    </Container>
  );
};

export default Cart;

const styles = StyleSheet.create({});
