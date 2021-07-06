import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Container } from "../Components/Components";
import { Colors } from "../Constants/Constants";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = (props) => {



  return (
    <Container style={{paddingTop:10}}>
     <View style={styles.search}>

     </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  search: {
    width: width / 1.05,
    backgroundColor: "white",
    height: 45,
    borderRadius: 10,
    borderBottomWidth: 1,
    elevation: 5,
  },
});
