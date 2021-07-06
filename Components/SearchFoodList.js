import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import SearchFoodList1 from "./SearchFoodList1";

export default function PopularRadioList(props) {
    const [songname, setSongname] = useState([
        {
            name: "Breakfast",
            img: {
                uri: "https://experiencetheflavour.files.wordpress.com/2016/12/wp-1482418673495.jpg?w=720",
            },
            id: "1",

        },
        {
            name: "Lunch",
            img: {
                uri: "https://lh3.googleusercontent.com/proxy/JcgPBkrGChatAj51Xk8ps5j1UpHfqrENFSGM45LcDVekGhI9b6MYLNA0CTgctrB362ni2JbvaGp_bDOwpUTsuvT4hZX0uCuG5TdTyqFXGvyOS5qUPLePcaxR3UKC6kKTwt0REktVjktIkE2lNBWruwWVebse7eDzEDKeT6HxRINKWged4OphLzTNsPMCVmiCJEfe7xFuZp4l",
            },
            id: "2",
            artist: "Ed Sheeran",
        },
        {
            name: " Snacks",
            img: {
                uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/original-ranch-snack-mix1-1556577286.jpg?crop=0.667xw:1.00xh;0.205xw,0&resize=640:*",
            },
            id: "3",
            artist: "Taylor Swift",
        },

        {
            name: "Dinner",
            img: {
                uri: "https://media-cdn.tripadvisor.com/media/photo-s/16/96/5b/99/dinner.jpg",
            },
            id: "4",
            artist: "Ava Max",
        },
        {
            name: "Fast Food",
            img: {
                uri: "data:image/jpeg;base64,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",
            },
            id: "5",
            artist: "Taylor Swift",
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
                Food
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
                                style={{ alignItems: "center", justifyContent: "center" }}
                            >
                                <View
                                    style={{
                                        width: 85,
                                        height: 85,
                                        elevation: 20,
                                        borderRadius: 200,
                                        elevation: 20,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        style={{ width: 80, height: 80, borderRadius: 200 }}
                                        source={item.img}
                                    />
                                </View>
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 15,
                                        fontWeight: "700",
                                        justifyContent: "center",
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        </Surface>
                    );
                }}
                ListFooterComponent={() =>

                    <SearchFoodList1 />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 175,
        width: "100%",
        marginBottom: 380,

    },
    surface: {
        width: 100,
        padding: 5,
        backgroundColor: "transparent",
        margin: 3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,

    },
});
