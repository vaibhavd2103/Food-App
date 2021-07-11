import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {Colors, Font, Sizes} from '../../Constants/Constants'

import { Entypo,Ionicons } from '@expo/vector-icons';
// import {Colors, Sizes,Font} from '

const MyProfile = (props) => {
  return (
    <ScrollView style = {{width:'100%'}}>
    <View style = {styles.container}>
 <View style={{flexDirection:'row', backgroundColor:'green', width:'100%', fontSize:20, fontWeight:'bold', height:50, justifyContent:'center', alignItems:'center'}}>
        <View style={{ width: "10%" }}>
          
            <Ionicons name="chevron-back-sharp" size={24} color="white" onPress = {()=> props.navigation.goBack()}/>
         
        </View>
        <View style={{width:'80%', alignItems:'center'}}>
          <Text style={{ color:'white', fontSize: 22, fontWeight: "bold" }}>
            My Profile
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
     <ImageBackground 
        source = {{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxesCtVsGXREMUyqjo6AzEwL3trcc4f2iGA&usqp=CAU'
        }}
        style = {styles.image}
     >

       <View style = {{justifyContent:'flex-end', height:240, paddingLeft:40}}>
 <Text style = {styles.imagetext}>
      Eva Max
    </Text>
       </View>

        <View style = {{width:'100%', alignItems:'flex-end', paddingRight:18, position:'absolute', height:250, flexDirection:'column-reverse', marginTop:25}}>
 <View style = {styles.icon}>
<Entypo name="edit" size={24} color="black" style = {{alignSelf:'center',  bottom:10}} onPress = {() => props.navigation.navigate('EditProfile')} />
       </View>
        </View>
        
     </ImageBackground>

       
        
        <Text style = {styles.text}>
            Mobile No. 
        </Text>
       <TextInput placeholder = 'Enter your Mobile Number' style = {styles.textinput} />
        
        <Text style = {styles.textname}>
            Email Address
        </Text>
       <TextInput placeholder = 'Enter your Email Address' style = {styles.textinput} />
       
        <Text style = {styles.textname}>
            Address
        </Text>
       <TextInput placeholder = 'Enter your Address' style = {styles.address} multiline = {true} editable= {true} />


<TouchableOpacity style = {styles.button}>
  <View >
    <Text style = {{fontSize:20, fontWeight:'bold'}}>
      Add
    </Text>
  </View>
</TouchableOpacity>



    </View>
    </ScrollView>

    
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container:{
    flex:1,
    
    
  },
  image:{
    height:250,
    width:'100%',
  
  },

  
  icon:{
    height:50,
    width:50,
    borderRadius:30,
    backgroundColor:'red',
    justifyContent:'flex-end',
    
  },
  textinput:{  
    borderRadius:5,
    borderWidth:1,
    width:'90%',
    alignSelf:'center',
    paddingLeft:10,
    height:40
  },  

   name:{ 
    borderRadius:5,
    borderWidth:1,
    width:'90%',
    alignSelf:'center',
    paddingLeft:10,
    height:40
  },

  button:{
    width:80,
    height:40,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:20,
    marginVertical:40
  },
  address:{
    height:100,
    borderRadius:5,
    borderWidth:1,
    width:'90%',
    alignSelf:'center',
    paddingLeft:10
  },

  text:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:40,
    width:'95%',
    marginVertical:10,
    paddingLeft:10,
    
  },

  textname:{
    fontSize:14,
    fontWeight:'bold',
    width:'95%',
    marginVertical:10,
    paddingLeft:10
  },
  imagetext:{
      fontSize:30,
      fontWeight:'bold',
      color:'white'
  }

})


