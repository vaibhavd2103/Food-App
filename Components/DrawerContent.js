import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "react-native-vector-icons";
import { Colors, Font, Sizes } from "../Constants/Constants";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <DrawerContentScrollView {...props}>
        {/* ---------------------------- Drawer content --------------------------------------- */}
        <View style={styles.drawerContent}>
          {/* ----------------------------- User Info ----------------------------------------- */}
          <View style={styles.userinfo}>
            <TouchableOpacity
            //onPress={() =>}
            >
              <View style={{ flexDirection: "row" }}>
                <Avatar.Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLkkV462n0oIUwMR99gPmRAa8iKA1Q4AP2g&usqp=CAU",
                  }}
                  size={60}
                />

                <View style={{ marginLeft: 10 }}>
                  <Title
                    style={{ color: "white", maxWidth: "90%" }}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    ABC
                  </Title>
                  <Caption style={{ fontSize: 15, color: "white" }}>
                    abc@gmail.com
                  </Caption>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* -------------------------Drawer Section Starts----------------------- */}
          <Drawer.Section style={styles.section}>
            {/* ------------------------- MY ORDERS SECTION ----------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="musical-notes" color={Colors.accent} size={size} />
              )}
              label={() => (
                <Text style={{...Font.title}}>My Orders</Text>
              )}
              activeBackgroundColor="red"
              pressColor="pink"
              style={{}}
              //   onPress={() => {
              //     props.navigation.navigate("Home");
              //   }}
            />
            {/* ------------------------- DELIVERY ADDRESS ----------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color={Colors.accent} size={25} />
              )}
              label={() => (
                <Text style={{...Font.title}}>My Profile</Text>
              )}
              pressColor="pink"
              style={{}}
              //   onPress={() => {
              //     props.navigation.navigate("Setting");
              //   }}
            />
            {/* ------------------------- Payment methods ----------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color={Colors.accent} size={25} />
              )}
              label={() => (
                <Text style={{...Font.title}}>
                  Payment Methods
                </Text>
              )}
              pressColor="pink"
              style={{}}
              //   onPress={() => {
              //     props.navigation.navigate("Setting");
              //   }}
            />

            {/* ------------------------- Contact us  SECTION ----------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color={Colors.accent} size={25} />
              )}
              label={() => (
                <Text style={{...Font.title}}>Contact Us</Text>
              )}
              pressColor="pink"
              style={{}}
              //   onPress={() => {
              //     props.navigation.navigate("Setting");
              //   }}
            />
            {/* ------------------------- Settings  SECTION ----------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color={Colors.accent} size={25} />
              )}
              label={() => (
                <Text style={{...Font.title}}>Settings</Text>
              )}
              pressColor="pink"
              style={{}}
              //   onPress={() => {
              //     props.navigation.navigate("Setting");
              //   }}
            />
            {/* ------------------------- Helps & FAQs  SECTION ----------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color={Colors.accent} size={25} />
              )}
              label={() => (
                <Text style={{...Font.title}}>Helps & FAQs</Text>
              )}
              pressColor="pink"
              style={{}}
              //   onPress={() => {
              //     props.navigation.navigate("Setting");
              //   }}
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
    flexDirection: "row",

    backgroundColor: Colors.primary,
  },
  section: {
    paddingTop: 180,
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
