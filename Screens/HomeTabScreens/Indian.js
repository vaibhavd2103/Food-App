import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "../../Components/Components";
import ResturantFlatlist from './../../Components/HomeComponents/ResturantFlatlist';

const Indian = (props) => {
  return (
    <Container>
       <ResturantFlatlist navigation={props.navigation} /> 
    </Container>
  );
};

export default Indian;

const styles = StyleSheet.create({});
