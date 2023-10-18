import React, { useState } from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Pressable,
    Modal,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const FilterList = () => {
    const navigation = useNavigation();

    const products = [
        {
            id: 1,
            name: "Kho binh an",
            diadiem: "hcm",
            gia: "5000000",
            dienTich: 100,
            image: "https://thegioixaydung.com/wp-content/uploads/2017/05/Nh%C3%A0-kho-ti%E1%BB%81n-ch%E1%BA%BF-%C4%91%E1%BA%B9p-3.jpg",
        },
        {
            id: 2,
            name: "Kho an binh",
            diadiem: "hcm",
            gia: "5000000",
            dienTich: 100,
            image: "https://thegioixaydung.com/wp-content/uploads/2017/05/Nh%C3%A0-kho-ti%E1%BB%81n-ch%E1%BA%BF-%C4%91%E1%BA%B9p-3.jpg",
        },
        {
            id: 3,
            name: "Kho tuan loi",
            diadiem: "hcm",
            gia: "5000000",
            dienTich: 100,
            image: "https://thegioixaydung.com/wp-content/uploads/2017/05/Nh%C3%A0-kho-ti%E1%BB%81n-ch%E1%BA%BF-%C4%91%E1%BA%B9p-3.jpg",
        },
        {
            id: 4,
            name: "binh tu",
            diadiem: "hcm",
            gia: "5000000",
            dienTich: 100,
            image: "https://thegioixaydung.com/wp-content/uploads/2017/05/Nh%C3%A0-kho-ti%E1%BB%81n-ch%E1%BA%BF-%C4%91%E1%BA%B9p-3.jpg",
        },

        {
            id: 5,
            name: "Kho long binh",
            diadiem: "hcm",
            gia: "5000000",
            dienTich: 100,
            image: "https://thegioixaydung.com/wp-content/uploads/2017/05/Nh%C3%A0-kho-ti%E1%BB%81n-ch%E1%BA%BF-%C4%91%E1%BA%B9p-3.jpg",
        },
        {
            id: 6,
            name: "kho binh long",
            diadiem: "hcm",
            gia: "5000000",
            dienTich: 100,
            image: "https://thegioixaydung.com/wp-content/uploads/2017/05/Nh%C3%A0-kho-ti%E1%BB%81n-ch%E1%BA%BF-%C4%91%E1%BA%B9p-3.jpg",
        },
        {
            id: 7,
            name: "hong anh",
            diadiem: "hcm",
            gia: "5000000",
            dienTich: 100,
            image: "https://thegioixaydung.com/wp-content/uploads/2017/05/Nh%C3%A0-kho-ti%E1%BB%81n-ch%E1%BA%BF-%C4%91%E1%BA%B9p-3.jpg",
        },
        {
            id: 8,
            name: "quy nha",
            gia: "5000000",
            dienTich: 100,
            image: "https://thegioixaydung.com/wp-content/uploads/2017/05/Nh%C3%A0-kho-ti%E1%BB%81n-ch%E1%BA%BF-%C4%91%E1%BA%B9p-3.jpg",
            diadiem: "hcm",
        },
    ];

    const [userInput, setUserInput] = useState("");
    const [modalVisible, setModalVisible] = useState("");

    // filter func
    
    const filterData = (item) => {
        if (userInput === "" || item.name.toLowerCase().includes(userInput.toLowerCase())) {
            return (
                <TouchableOpacity
                    
                    style={{
                        height: 150,
                        paddingTop: 20,
                        paddingStart: 10,
                        flexDirection: 'row'
                    }}
                    onPress={()=>navigation.navigate('BarChar_NhapXuat')}>

                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: 'cover',
                            borderRadius: 10,
                            marginRight: 15
                        }}
                        source={{ uri: item.image }} 
                         />

                    <View style={{
                        flex: 1,
                        marginRight: 10
                    }}>
                        <Text style={{
                            color: "balck",
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>{item.name} </Text>
                        <View style={{
                            height: 1,
                            backgroundColor: 'black',
                        }} />


                        <Text style={{
                            color: "balck",
                            fontSize: 12,
                        }}>Dia diem: {item.diadiem} </Text>

                        <Text style={{
                            color: "balck",
                            fontSize: 12,
                        }}>Gia: {item.gia} d</Text>
                        <Text style={{
                            color: "balck",
                            fontSize: 12,
                        }}>Gia: {item.dienTich} m</Text>
                        
                    </View>
                </TouchableOpacity> )
        };

        // if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
        //     return (
        //         <View style={styles.itemContainer}>
        //             <Text>{item.name}</Text>
        //         </View>
        //     )
        // }
    };



    return (
        <View>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <Ionicons
                        style={styles.iconSearch}
                        name="search"
                        size={23}
                        color="#000"
                    />
                    <TextInput
                        placeholder="Search"
                        clearButtonMode="always"
                        style={styles.search}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text) => { setUserInput(text); }}
                    />
                </View>
                <Pressable style={styles.listFilter}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                        
                    >
                        <View style={styles.centeredView}>
                            <Pressable
                                style={[styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Ionicons
                                    name="close-outline"
                                    size={35}
                                    color="#000"
                                    style={styles.textStyle}
                                />
                            </Pressable>
                            <View style={styles.modalView}>
                                <Text>jshgfjh</Text>
                            </View>

                        </View>
                    </Modal>
                    <Ionicons
                        style={styles.iconFilter}
                        name="options-outline"
                        size={30}
                        color="#000"
                        onPress={() => setModalVisible(true)}
                    ></Ionicons>

                </Pressable>
            </View>
            <FlatList
                data={products}
                
                renderItem={({ item, index }) => filterData(item)}
                
            />
        </View>
    );
}
export default FilterList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "balck",
    },
    //search
    header: {
        width: "100%",
        height: 50,
        marginTop: 50,
        flexDirection: "row",
    },
    listFilter: {
        flex: 1,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    iconFilter: {
        width: "50%",
        textAlign: "center",
    },
    searchBar: {
        flexDirection: "row",
        alignSelf: "center",
        width: "80%",
        marginLeft: 10,
        paddingHorizontal: 1,
        paddingVertical: 2,
        coler: "#000",
        borderWidth: 1,
        borderRadius: 9,
    },
    iconSearch: {
        marginTop: 1,
        marginLeft: 3,
        alignItems: "center",
        width: "10%",
    },
    search: {
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9,
        width: "90%",
    },

    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10",
        marginHorizontal: 16,
        backgroundColor: "#ebf5fb",
        paddingHorizontal: 36,
        paddingVertical: 16,
        borderRadius: 6,
    },
    centeredView: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        opacity: 1,
        padding: 35,
        alignItems: "center",
    },
    buttonClose: {
        width: "10%",
        left: 150,
    },
    modalView_1: {
        height: "30%",
    },
    modalView_2: {
        height: "30%",
    },
});