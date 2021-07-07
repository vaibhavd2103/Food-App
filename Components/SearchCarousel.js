import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, Dimensions } from "react-native";
import { Container } from "../Components/Components";
import { Colors, Sizes, Font } from "../Constants/Constants";
import { FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';
import Carousel, { Pagination } from "react-native-snap-carousel";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import SearchFoodList from './../Components/SearchFoodList';
import SearchFoodList1 from './../Components/SearchFoodList1';

export default function SearchCarousel(props) {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const [index, setIndex] = useState(0);
    const isCarousel = React.useRef(null);
    const [image, setImage] = useState([
        {
            id: '1',
            img: {
                uri: "https://lh3.googleusercontent.com/proxy/C6PHLd5eDUw1_9E5_Tk2rjNupub_wPkOuKFAIssunvjKlByIubq49wDUv2DfvOYI_4avzr3_MtclyV6Idqne_I4OkNwDrnkcsHCRGQCCsNhAMTZ2A4fHz_Tv5BfkvuXlfcHjXuqb1-VyNOAPz2Ih1VrQ",
            },
            proffer: 'PRO extra Rs 100 OFF',
            offer: '20% OFF\nUpto Rs 100'

        },
        {
            id: '2',
            img: {
                uri: "https://i.pinimg.com/originals/cb/cc/04/cbcc04c6d1621b6545682e3cb5cebee3.jpg",
            },
            proffer: 'PRO extra Rs 100 OFF',
            offer: '50% OFF\nUpto Rs 100'

        },
        {
            id: '3',
            img: {
                uri: "https://inspirationfeed.com/wp-content/uploads/2018/02/Spitonys-pizza-night.jpeg",
            },
            proffer: 'PRO extra Rs 100 OFF',
            offer: '70% OFF\nUpto Rs 100'

        },

        {
            id: '4',
            img: {
                uri: "https://i.pinimg.com/736x/1a/7d/97/1a7d972012945bba56ce8e29637b8376.jpg",
            },
            proffer: 'PRO extra Rs 100 OFF',
            offer: '50% OFF\nUpto Rs 100'

        },
        {
            id: '5',
            img: {
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dDG3Zu0w0u8Ik1kps4ghr8zF8kHdLK-WXw&usqp=CAU",
            },
            proffer: 'PRO extra Rs 100 OFF',
            offer: '30% OFF\nUpto Rs 100'

        },
    ])
    return (
        <Container >
            <ScrollView style={{width:'100%'}}>
            <Carousel
                layout="default"
                layoutCardOffset={0}
                ref={isCarousel}
                data={image}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                paddingTop: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor:"transparent"
                            }}
                        >

                            <ImageBackground
                                source={item.img}
                                style={{
                                    width: 410,
                                    height: 300,
                                    // alignItems: "center",
                                    justifyContent: "center",

                                }}
                                blurRadius={0.4}
                                imageStyle={{ borderBottomRightRadius: 80 }}

                            >
                                <View style={styles.offer}>
                                    <MaterialCommunityIcons name="brightness-percent" size={18} color="black" />
                                    <Text style={{ ...Font.title }}>{item.offer}</Text>
                                </View>

                                {<Text>{item.proffer}</Text> ? (
                                    <View style={styles.proffer}>
                                        <Text style={{ ...Font.title }}>{item.proffer}</Text>
                                    </View>
                                ) : (
                                    <View style={{ backgroundColor: 'transparent' }}>

                                    </View>
                                )}

                            </ImageBackground>

                        </View>
                    );
                }}
                sliderWidth={windowWidth}
                itemWidth={windowWidth * 1}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
                enableSnap={true} //perfect center me ata hai
                loop={true}
                autoplay={true}
                enableMomentum={false}
                lockScrollWhileSnapping={false} //prevent auto scroll while we scroll
                autoplayDelay={500}
                autoplayInterval={3000}
            />
            <View style={styles.search}>
                <View style={{ flexDirection: "row", width: "90%", elevation: 10 }}>
                    <FontAwesome name="search" size={24} color={Colors.text} />
                    <TextInput
                        placeholderTextColor={Colors.accent}
                        placeholder="Search..."
                        style={{ paddingLeft: 5, width: "90%", fontSize: 15 }}
                    />
                </View>

            </View>
                <View style={{marginBottom:200}}>
            <SearchFoodList navigation={props.navigation} />
                    <SearchFoodList1 navigation={props.navigation} />
                   
            </View>
            </ScrollView>
        </Container>
    );
};



const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        backgroundColor: Colors.secondary,
        width: "90%",
        alignItems: "center",
        height: 40,
        borderRadius: 15,
        margin: 6,
        padding: Sizes.padding - 5,
        justifyContent: "center",
        marginTop: Sizes.margin * 2,
        position: 'absolute',
        // bottom: 780

    },
    proffer: {
        height: 25,
        width: 160,
        backgroundColor: Colors.accent,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10
    },
    offer: {
        height: 35,
        width: 160,
        backgroundColor: 'dodgerblue',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 180,
        flexDirection: 'row',
        paddingLeft: 5


    }
});
