import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {FontAwesome} from 'react-native-vector-icons'

const Settings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
               <View  style = {{width:'10%'}}>
                <FontAwesome name="arrow-left" size={22} color="white" />
               </View>
                <View style = {{width:'80%', alignItems:'center'}}>
              <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>Settings</Text>
                </View>
                
            </View>

            <TouchableOpacity>
            <View style={styles.component}>
                <Text style={{ color: "black", fontSize: 18 }}>Edit Profile</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.component}>
                <Text style={{ color: "black", fontSize: 18 }}>Notification</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.component}>
                <Text style={{ color: "black", fontSize: 18 }}>Change Password</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.component}>
                <Text style={{ color: "black", fontSize: 18 }}>Saved Post</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.component}>
                <Text style={{ color: "black", fontSize: 18 }}>Help & Support</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.component}>
                <Text style={{ color: "black", fontSize: 18 }}>Rate App</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.component}>
                <Text style={{ color: "black", fontSize: 18 }}>Invite Friends</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.component}>
                <Text style={{ color: "black", fontSize: 18 }}>Feedback</Text>
            </View>
            </TouchableOpacity>

        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#39A2DB",
        paddingTop:60
    },
    header: {
        justifyContent: "center",
        height: 60,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        marginBottom:10,
      

    },
    component: {
        height: 60,
        borderRadius: 10,
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 10,
        marginBottom: 5,
        margin:10
       
    }
})