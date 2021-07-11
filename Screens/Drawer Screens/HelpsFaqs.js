import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from "react-native-vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Font } from '../../Constants/Constants';

const CustomerSupport = (props) => {
    return (

        <ScrollView>
        <View style = {styles.container}>
{/*------------------------------------Header-----------------------------------*/}
            <View style={styles.header}>
        
                 <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5,alignItems:'center',justifyContent:'center' }}>
                     
                        <Ionicons name="chevron-back" size={30} color= 'white' onPress = {() => props.navigation.goBack()}/>
               
                 </View>
        
                 <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{...Font.header, color:'white'}}>
                     Help Desk
                    </Text>
                 </View>
        
                 <View style={{ width: "10%" }}></View>
        
            </View>

            <ScrollView style = {{width:'100%'}} contentContainerStyle = {{alignItems:'center'}}>

 {/*------------------------------------------------------Contact Us----------------------------------------------------*/}
              
                <View style = {{ marginTop:10 ,justifyContent:'center', alignItems:"center"}}>
                  
                    <Text style = {{...Font.header, color:Colors.primary}}>
                        Contact Us
                    </Text>
               
                </View>

{/*------------------------------------------------------Phone number----------------------------------------------------*/}
                <TouchableOpacity onPress = {() =>{}} style = {{width:'100%', paddingLeft:5, flexDirection:'row', marginTop:10, alignItems:'center'}}>
                    
                    <View style = {{width:'100%', paddingLeft:5, flexDirection:'row', marginTop:13, alignItems:'center'}}>
                       
                        <FontAwesome name="phone" size={20} color={Colors.secondary} />
                       
                        <Text style = {{...Font.title, color:Colors.accent}}>
                            {"   "}: 022-2367 2232
                        </Text>
                   
                    </View>
               
                </TouchableOpacity>

{/*-----------------------------------------------------Email---------------------------------------------------*/}
              
                <TouchableOpacity onPress = {() =>{}} style = {{width:'100%', paddingLeft:5, flexDirection:'row', marginTop:10, alignItems:'center'}}>
                    
                    <View style = {{width:'100%', paddingLeft:5, flexDirection:'row', marginTop:13, alignItems:'center'}}>

                        <MaterialCommunityIcons name="email" size={20} color={Colors.secondary} />

                        <Text style = {{...Font.title, color:Colors.accent}}>
                            {"  "}: hungrezi@gmail.com
                        </Text>

                    </View>
                </TouchableOpacity>

{/*----------------------------------------------------------------FAQ---------------------------------------------------------------*/}
               
                <View style = {{ marginTop:20 ,justifyContent:'center', alignItems:"center", marginBottom:10}}>
                    <Text style = {{...Font.header, color:Colors.primary}}>
                        FAQ
                    </Text>
                </View>

{/*------------------------------------------------------------FAQ Questions---------------------------------------------------------- */}

                <View style = {{width:'100%'}}>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{...Font.title  ,color:Colors.accent}}>
                                Couldn't download song?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{...Font.title ,color:Colors.accent}}>
                               Eqalizer not working?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{...Font.title ,color:Colors.accent}}>
                                Streaming Issues?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{...Font.title ,color:Colors.accent}}>
                                Missing Songs?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{...Font.title ,color:Colors.accent}}>
                                Podcast issue?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{...Font.title ,color:Colors.accent}}>
                                Player not working?
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            
{/* -----------------------------------------TextInput and Submit Button---------------------- */}

                <TextInput placeholder = 'Enter your Queery...' placeholderTextColor = {Colors.accent} style = {styles.queryinp}/>

                <TouchableOpacity style = {styles.submit}>
                    <View>
                        <Text style = {{...Font.title, color:Colors.accent}}>
                            Submit
                        </Text>
                    </View>
                </TouchableOpacity>

                </ScrollView>

{/*------------------------------------------------------------End---------------------------------------------------------- */}
        </View>
        </ScrollView>
    )
}

export default CustomerSupport

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        
       
      },
      header: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center'
      },

      headertext: {
        fontSize: Font.header.fontSize,
        fontWeight: "bold",
        color:'black'
      },
      
      box:{
          height:40,
          padding:10,
          borderRadius:20,
          justifyContent:'center',
          alignItems:'center',
          margin:5,
          backgroundColor:Colors.primary
      },
      queryinp:{
          width:'70%',
          maxWidth:700,
          height:40,
          borderRadius:20,
          paddingLeft:10,
          fontSize:Font.title.fontSize,
          marginTop:10,
          backgroundColor:Colors.primary
      },

      submit:{
          width:100,
          height:40,
          justifyContent:'center',
          alignItems:'center',
          marginTop:20,
          borderRadius:20,
          backgroundColor:Colors.primary
      }
})
