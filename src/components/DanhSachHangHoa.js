import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TextInput } from "react-native";

const products = [
    {
        id: 'product1',
        nameProduct: 'Bánh mì',
        warehouse: 'Kho 1',
        count: '200 kg',
        idWarehouse: 'warehouse1',
    },
    {
        id: 'product2',
        nameProduct: 'Tạp chí',
        warehouse: 'Kho 2',
        count: '500 kg',
        idWarehouse: 'warehouse2',
    },
    {
        id: 'product3',
        nameProduct: 'Hải sản',
        warehouse: 'Kho 3',
        count: '5 tấn',
        idWarehouse: 'warehouse3',
    },
    {
        id: 'product4',
        nameProduct: 'Aquafina',
        warehouse: 'Kho 1',
        count: '1000 m3',
        idWarehouse: 'warehouse1',
    },
    {
        id: 'product5',
        nameProduct: 'Cua',
        warehouse: 'Kho 4',
        count: '1000 m3',
        idWarehouse: 'warehouse1',
    },
];

const warehouses = [
    {
        id: 'warehouse1',
        warehouse: 'Kho 1'
    },
    {
        id: 'warehouse2',
        warehouse: 'Kho 2'
    },
    {
        id: 'warehouse3',
        warehouse: 'Kho 3'
    },
    {
        id: 'warehouse4',
        warehouse: 'Kho 4'
    },
];

const DanhSachHangHoa = () => {
    const [userInput, setUserInput] = useState("");
    const [productList, setProductList] = useState(products);
    const [id, setId] = useState("");

    const handleSearch = (text) => {
        if (text) {
            let searchList = productList.filter((productList) => 
                productList.nameProduct.toLowerCase().includes(text.toLowerCase())
            );
            
            if (id) {
                let filterList = products.filter((products) =>
                    products.idWarehouse.toLowerCase().includes(id.toLowerCase())
                )
                setProductList(filterList)
            }

            setProductList(searchList)
        } else {
            let filterList = products.filter((productList) => 
                productList.idWarehouse.toLowerCase().includes(id.toLowerCase())
            );

            setProductList(filterList)
        }
    }

    const filterWarehouse = (id) => {
        if (id) {
            let filterList = products.filter((productList) => 
                productList.idWarehouse.toLowerCase().includes(id.toLowerCase())
        );

        if (userInput) {
            let searchList = products.filter((products) =>
                products.nameProduct.toLowerCase().includes(userInput.toLowerCase()
                )
            )
            setProductList(searchList)
        }

        setProductList(filterList)
        }  else {
            let searchList = products.filter((productList) => 
                productList.nameProduct.toLowerCase().includes(userInput.toLowerCase())
            );

            setProductList(searchList)
        }
        setUserInput("");
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder="Search"
                clearButtonMode="always"
                style={styles.searchBar}
                autoCapitalize="none"
                autoCorrect={false}
                value={userInput}
                onChangeText={(text) => {
                    setUserInput(text);
                    handleSearch(text);
                }} />

            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={warehouses}
                maxHeight={300}
                labelField="warehouse"
                valueField="id"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={id}
                onChange={item => {
                    setId(item.id);
                    filterWarehouse(item.id);
                }}
            />

            <FlatList
                data={productList}
                renderItem={({ item, index }) =>
                    <View style={styles.item}>
                        <Text style={styles.nameProduct}>Tên sản phẩm: {item.nameProduct}</Text>
                        <View style={styles.warehouse_count}>
                            <Text>{item.warehouse}</Text>
                        </View>
                        <Text>{item.count}</Text>
                    </View>
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: StatusBar.currentHeight || 0,
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    warehouse_count: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    count: {
        width: 100,
        height: 100,
        alignItems: 'flex-end',
    },

    nameProduct: {
        fontSize: 20,
    },

    searchBar: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
    },

    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },

    icon: {
        marginRight: 5,
    },

    placeholderStyle: {
        fontSize: 16,
    },

    selectedTextStyle: {
        fontSize: 16,
    },

    iconStyle: {
        width: 20,
        height: 20,
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default DanhSachHangHoa;