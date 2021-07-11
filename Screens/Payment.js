import React, { useState } from 'react'
import Carousel, { Pagination } from "react-native-snap-carousel";
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from 'react-native'
import { MaterialIcons } from 'react-native-vector-icons'
import { Colors, Font, Sizes } from "../Constants/Constants";
import { ScrollView } from 'react-native-gesture-handler';
import {EvilIcons} from 'react-native-vector-icons'
import { RadioButton } from "react-native-paper";










const Payment = () => {
  const [checked, setChecked] = React.useState("first");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [data, setData] = useState([
    {
      id: 1,
      img:'https://findisha.com/wp-content/uploads/2019/12/hdfc-millennia-credit-card.png'
    },
    {
      id: 2,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNcxqW_WVwcPuL1oIdiAcdtryaPe6pmUV4Pv-O__f_T8apRUPyod4y8WlUY6AsMXJ_Ts&usqp=CAU'
    },
    {
      id: 3,
      img:'https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png'
    },
  ])
  return (
    <ScrollView style={{width:'100%'}}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{width:'10%'}}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        </View>
        <View style={{width:'80%'}}>
        <Text style={{ ...Font.header }}> Payment Options</Text>
        </View>
        <View style={{width:'10%'}}>
            
        </View>
      </View>
      <Carousel
        layout="default"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data}
        renderItem={({ item, index }) => {
          return (
         <View>
            <View style={styles.img}>
              <Image source={{uri:item.img}} style={{height:210,width:'100%'} }/>
            </View>
            
              </View>
              
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.8}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        enableSnap={true} //perfect center me ata hai
        loop={true}
        // autoplay={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true} //prevent auto scroll while we scroll
        // autoplayDelay={500}
        // autoplayInterval={1500}
      />
      <Pagination
        dotsLength={data.length}
        dotColor={Colors.accent}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: Colors.accent,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotColor="black"
        inactiveDotScale={1}
        tappableDots={true}
        containerStyle={{paddingTop:20}}
      /> 
      <View style={{paddingRight:100,width:'100%'}}>
                <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>
                  Add a new Payment options
                </Text>
        </View>
       
      <View  style={{
                    flexDirection: "row", 
                    alignItems: "center",
                    height: 50,
                    width: "95%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                    backgroundColor: "white",
                    
                    
                  }}>
                    <View style={{width:'10%'}}>
                     <EvilIcons name="sc-google-plus" size={24} color="black" />
                     </View>
                     <View style={{width:'75%'}}>
                    
        <Text style={{ ...Font.title,}}>Google Pay</Text>
        </View>
        <View style={styles.option}>
        <RadioButton
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
          uncheckedColor="grey"
          color={Colors.accent}
        />
      </View>
      </View>

      <View  style={{
                    flexDirection: "row", 
                    alignItems: "center",
                    height: 50,
                    width: "95%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                    backgroundColor: "white",
                    
                    
                  }}>
                    <View style={{width:'10%'}}>
                     <EvilIcons name="sc-google-plus" size={24} color="black" />
                     </View>
                     <View style={{width:'75%'}}>
                    
        <Text style={{ ...Font.title,}}>Visa</Text>
        </View>
        <View style={styles.option}>
        <RadioButton
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
          uncheckedColor="grey"
          color={Colors.accent}
        />
      </View>
      </View>
      
      <View  style={{
                    flexDirection: "row", 
                    alignItems: "center",
                    height: 50,
                    width: "95%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                    backgroundColor: "white",
                    
                    
                  }}>
                    <View style={{width:'10%'}}>
                     <EvilIcons name="sc-google-plus" size={24} color="black" />
                     </View>
                     <View style={{width:'75%'}}>
                    
        <Text style={{ ...Font.title,}}>Visa</Text>
        </View>
        <View style={styles.option}>
        <RadioButton
          value="third"
          status={checked === "third" ? "checked" : "unchecked"}
          onPress={() => setChecked("third")}
          uncheckedColor="grey"
          color={Colors.accent}
        />
      </View>
      </View>
      
      <View  style={{
                    flexDirection: "row", 
                    alignItems: "center",
                    height: 50,
                    width: "95%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                    backgroundColor: "white",
                    
                    
                  }}>
                    <View style={{width:'10%'}}>
                     <EvilIcons name="sc-google-plus" size={24} color="black" />
                     </View>
                     <View style={{width:'75%'}}>
                    
        <Text style={{ ...Font.title,}}>Visa</Text>
        </View>
        <View style={styles.option}>
        <RadioButton
          value="fourth"
          status={checked === "fourth" ? "checked" : "unchecked"}
          onPress={() => setChecked("fourth")}
          uncheckedColor="grey"
          color={Colors.accent}
        />
      </View>
      </View>
      
      <View  style={{
                    flexDirection: "row", 
                    alignItems: "center",
                    height: 50,
                    width: "95%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                    backgroundColor: "white",
                    
                    
                  }}>
                    <View style={{width:'10%'}}>
                     <EvilIcons name="sc-google-plus" size={24} color="black" />
                     </View>
                     <View style={{width:'75%'}}>
                    
        <Text style={{ ...Font.title,}}>Visa</Text>
        </View>
        <View style={styles.option}>
        <RadioButton
          value="fifth"
          status={checked === "fifth" ? "checked" : "unchecked"}
          onPress={() => setChecked("fifth")}
          uncheckedColor="grey"
          color={Colors.accent}
        />
      </View>
      </View>
      <TouchableOpacity
       activeOpacity={0.7} 
      style={{width:100,backgroundColor:Colors.accent,alignItems:'center',height:40,justifyContent:'center',borderRadius:20,marginTop:20}}>
      <View>
        <Text style={{...Font.title,color:'white',fontSize:16}}>
              Next
        </Text>
      </View>
      </TouchableOpacity>
      </View>
      </ScrollView>
  )
}

export default Payment

const styles = StyleSheet.create({
  container: {
        flex: 1,
    paddingTop: 50,
    alignItems:'center'
    
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    
    },
    img: {
        paddingTop: 20,
        height: 260,
        justifyContent: 'center',
        alignItems:'center'
        
        
  },
  option: {
    width: "10%",
    height: 50,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
})