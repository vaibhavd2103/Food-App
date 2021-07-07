import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import { Colors, Font, Sizes } from "../Constants/Constants";

export default function SearchFoodList1(props) {
    const [songname, setSongname] = useState([
        {
            name: "Trending This \n Week",
            img: {
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6NbDJDzU59O7kCQmTj0lkqTLJHuNvbxZfQ&usqp=CAU",
            },
            id: "1",

        },
        {
            name: "For The \n Family",
            img: {
                uri: "https://75580cde83d35dc00a05-20f670a5827f41ce9e85089eb012f48c.ssl.cf1.rackcdn.com/Velvet_Restaurant_Dinner.jpg",
            },
            id: "2",
            
        },
        {
            name: " Sweet Tooth",
            img: {
                uri: "https://michaelmichaels.com/wp-content/uploads/2019/02/Chocolate-Muffin-062-683x1024.jpg",
            },
            id: "3",
           
        },
        {
            name: "Most Romantic \n Restaurants",
            img: {
                uri: "https://im.whatshot.in/img/2018/Dec/image-1-1546261598.jpg",
            },
            id: "4",
            
        },
        {
            name: "Best Of \n Pune",
            img: {
                uri: "https://lh5.googleusercontent.com/-6UKnVynYrcE/UrF1Q-AA3CI/AAAAAAAALB4/YifR3edaHZ8/s640/blogger-image--658609469.jpg",
            },
            id: "5",
           
        },
     


    ]);
    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                    paddingLeft: 15,
                    paddingTop: 15

                }}
            >
                Curated Collection
            </Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={songname}
                horizontal={true}
                renderItem={({ item, index }) => {
                    return (
                        <Surface style={styles.surface}>
                            <TouchableOpacity
                                onPress={() => { }
                                }
                                
                            >
                               
                                <ImageBackground source={item.img} style={{ height: 150, width: 150}}blurRadius={0.8} borderRadius={20}>
                                    <Text style={{color:'white', fontWeight:'bold',paddingTop:100,fontSize:16 }}>
                                        {item.name}
                                    </Text>

                                    </ImageBackground>
                               
                            </TouchableOpacity>
                        </Surface>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "100%",
        backgroundColor: 'transparent',
       
        
    },
    surface: {
        width: 180,
        padding: 5,
        backgroundColor: "transparent",
        margin: 3,
        // justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,

    },
});
