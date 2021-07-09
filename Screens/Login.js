import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Container } from "../Components/Components";
import { Colors, Font, Sizes } from "../Constants/Constants";
import {
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from "react-native-vector-icons";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container style={styles.container}>
      <Text style={{ ...Font.header, fontSize: 22, marginBottom: 100 }}>
        Sign In
      </Text>
      <View style={styles.emailInput}>
        <Feather name="mail" size={20} color={Colors.accent} />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor={Colors.accent}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ paddingLeft: 15 }}
        />
      </View>
      <View style={styles.passwordInput}>
        <Feather name="lock" size={20} color={Colors.accent} />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.accent}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{ paddingLeft: 15 }}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            ...Font.title,
            textAlign: "right",
            paddingRight: Sizes.padding * 5,
            marginTop: Sizes.padding,
          }}
        >
          Forget password?
        </Text>
      </View>
      <TouchableOpacity
        style={styles.signIn}
        onPress={() => {
          props.navigation.replace("HomeScreen");
        }}
      >
        <Text style={{ ...Font.header, color: Colors.primary }}>Sign In</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  emailInput: {
    flexDirection: "row",
    width: Sizes.width - 100,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingLeft: 15,
    alignItems: "center",
    elevation: 5,
  },
  passwordInput: {
    flexDirection: "row",
    width: Sizes.width - 100,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingLeft: 15,
    alignItems: "center",
    marginTop: Sizes.padding,
    elevation: 5,
  },
  signIn: {
    width: Sizes.width / 2,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: Colors.accent,
    marginTop: 100,
  },
});
