import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,

} from "react-native-paper";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from "react-native-vector-icons";
import { Colors, Font, Sizes } from "../Constants/Constants";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <DrawerContentScrollView {...props}>
        {/* ---------------------------- Drawer content --------------------------------------- */}
        <View style={styles.drawerContent}>
          {/* ----------------------------- User Info ----------------------------------------- */}

          <TouchableOpacity
            //onPress={() =>}
            style={{ backgroundColor: "white", alignItems: "center" }}
          >
            <Avatar.Image
              source={{
                uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?width=982&height=726&auto=webp&quality=75",
              }}
              size={80}
              style={{ marginLeft: 0 }}
            />

            <View style={{ alignItems: "center" }}>
              <Text style={{ ...Font.title }}>ABC</Text>
              <Text style={{ ...Font.subtitle }}>abc@gmail.com</Text>
            </View>
          </TouchableOpacity>

          {/* -------------------------Drawer Section Starts----------------------- */}
          <Drawer.Section style={styles.section}>
            {/* ------------------------- MY ORDERS SECTION ----------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5
                  name="box-open"
                  color={Colors.accent}
                  size={size}
                />
              )}
              label={() => <Text style={{ ...Font.title }}>My Orders</Text>}
              activeBackgroundColor="red"
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("MyOrders");
              }}
            />
            {/* ------------------------- DELIVERY ADDRESS ----------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons
                  name="account-circle"
                  color={Colors.accent}
                  size={26}
                />
              )}
              label={() => <Text style={{ ...Font.title }}>My Profile</Text>}
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("MyProfile");
              }}
            />
            {/* ------------------------- Payment methods ----------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="wallet" color={Colors.accent} size={25} />
              )}
              label={() => (
                <Text style={{ ...Font.title }}>Payment Methods</Text>
              )}
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("PaymentMethods");
              }}
            />

            {/* ------------------------- Contact us  SECTION ----------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons
                  name="connect-without-contact"
                  color={Colors.accent}
                  size={25}
                />
              )}
              label={() => <Text style={{ ...Font.title }}>Contact Us</Text>}
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("ContactUs");
              }}
            />
            {/* ------------------------- Settings  SECTION ----------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color={Colors.accent} size={25} />
              )}
              label={() => <Text style={{ ...Font.title }}>Settings</Text>}
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
            {/* ------------------------- Helps & FAQs  SECTION ----------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color={Colors.accent} size={25} />
              )}
              label={() => <Text style={{ ...Font.title }}>Help & FAQs</Text>}
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("HelpsFaqs");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {},
  userinfo: {
   

    backgroundColor: Colors.primary,
  },
  section: {
    paddingTop: 80,
  },
  clearcache: {
    backgroundColor: "#FF2871",
    height: 40,
    width: 150,
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
});
