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
import {useNavigation} from '@react-navigation/native'
import ListThongKe from "../chuKho/ListThongKe"


const FilterList = () => {
    const navigation = useNavigation();

    const products = [
        {
            id: 1,
            tenChucNang: "Thống kê kho"
        },
        {
            id: 2,
            tenChucNang: "Thống kê kho tồn"
        },
        {
            id: 3,
            tenChucNang: "Thống kê và so sánh kho "
        },
    ];
    

    const filterData = (item) => {
        return (
            <View
                style={{
                    height: 100,
                    borderRadius: 20,
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "2%",
                    marginHorizontal: 16,
                    backgroundColor: "#ebf5fb",
                    borderRadius: 6,
                }}>

                <View style={{
                    width: "100%",
                    flexDirection:"row",
                }}>
                    <Text style={{
                        width:"66%",
                        color: "balck",
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>{item.tenChucNang} </Text>
                    <Ionicons
                        style={{left:100,width:"10%"}}
                        name="chevron-forward-outline"
                        size={30}
                        color="#000"
                        onPress={()=>navigation.navigate('ListThongKe')}
                    />
                </View>
            </View>)

    };

    return (
        <View style={{ marginTop: 60, }}>
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
});