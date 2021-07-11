import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView , Image} from 'react-native';
import {Colors, Sizes,Font} from '../../Constants/Constants'
import { Entypo , FontAwesome, Ionicons} from '@expo/vector-icons';

const App = (props) => {
  return (
    <ScrollView style = {{width:'100%'}}>
    <View style = {styles.container}>

     {/* <Image 
        source = {{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxesCtVsGXREMUyqjo6AzEwL3trcc4f2iGA&usqp=CAU'
        }}
        style = {styles.image}
     />

        <View style = {{ marginLeft:110, bottom:40, }}>
            <View style = {styles.icon}>
                <Entypo name="camera" size={24} color="black" style = {{alignSelf:'center', top:10}} />
            </View>
        </View> */}

        <View style={{flexDirection:'row', backgroundColor:Colors.primary, width:'100%', fontSize:20, fontWeight:'bold', height:50, justifyContent:'center', alignItems:'center'}}>
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

        <View
        style={{ width: 200, height: 200, }}
      >
          <ImageBackground
           source = {{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxesCtVsGXREMUyqjo6AzEwL3trcc4f2iGA&usqp=CAU'
        }}
            style={{ width: 200, height: 200, marginTop: 20, marginBottom: 10 }}
            imageStyle={{ borderRadius: 300}}
          ></ImageBackground>
        <View style={{ position: "absolute", top: 175, left: 145 }} onPress = {() =>{}}>
        
        <TouchableOpacity  activeOpacity ={0.7} onPress =  {()=> {}}>
<FontAwesome
          name="camera"
          size={35}
          color= 'grey'
          
         
        />
        </TouchableOpacity>
        
        </View>
      </View>
        
 
        <Text style = {styles.textname}>
            Name 
        </Text>
        <TextInput placeholder = 'Enter your Name' style = {styles.name} />
        
        <Text style = {styles.text}>
            Mobile No. 
        </Text>
       <TextInput placeholder = 'Enter your Mobile Number' style = {styles.textinput} />
        
        <Text style = {styles.text}>
            Email Address
        </Text>
       <TextInput placeholder = 'Enter your Email Address' style = {styles.textinput} />
       
        <Text style = {styles.text}>
            Address
        </Text>
       <TextInput placeholder = 'Enter your Address' style = {styles.address} multiline = {true} editable= {true} />  

<TouchableOpacity style = {styles.button}>
  <View onPress = {()=> {}} >
    <Text style = {{fontSize:20, fontWeight:'bold'}}>
      Add
    </Text>
  </View>
</TouchableOpacity>



    </View>
    </ScrollView>

    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  image:{
    height:200,
    width:200,
    borderRadius:100,
    marginTop:5

  
  },
  
  icon:{
    height:50,
    width:50,
    borderRadius:30,
    backgroundColor:Colors.accent,
    
    
  },
  textinput:{  
    borderRadius:5,
    borderWidth:1,
    width:'90%',
    alignSelf:'center',
    paddingLeft:Sizes.padding,
    height:40
  },  

   name:{ 
    borderRadius:5,
    borderWidth:1,
    width:'90%',
    alignSelf:'center',
    paddingLeft:Sizes.padding,
    height:40
  },

  button:{
    width:80,
    height:40,
    backgroundColor:Colors.accent,
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
    paddingLeft:Sizes.padding
  },

  text:{
    fontSize:Font.header.fontSize,
    fontWeight:Font.header.fontWeight,
    marginTop:10,
    width:'95%',
    marginVertical:10,
    paddingLeft:Sizes.padding
  },

  textname:{
    fontSize:Font.header.fontSize,
    fontWeight:Font.header.fontWeight,
    marginTop:40,
    width:'95%',
    marginVertical:10,
    paddingLeft:Sizes.padding
  },


})


