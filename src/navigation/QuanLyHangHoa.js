import React from "react";
import { Text, Platform, View } from "react-native";
import DanhSachHangHoa from "../chuKho/DanhSachHangHoa";
import TongSoHangHoa from "../chuKho/TongSoHangHoa";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const index = () => {
    const Tab = createBottomTabNavigator()
    const screenOptions = {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            bckground: "#fff"
        }
    }
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen
                    name="thongKe"
                    component={TongSoHangHoa}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Ionicons name="stats-chart" size={24} color={focused ? "#16247d" : "#111"}  />
                                    <Text style={{ fontSize: 12, color: "#16247d" }}>Thống Kê</Text>
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="Transaction"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#16247d",
                                        width: Platform.OS == "ios" ? 50 : 60,
                                        height: Platform.OS == "ios" ? 50 : 60,
                                        top: Platform.OS == "ios" ? -10 : -20,
                                        borderRadius: Platform.OS == "ios" ? 25 : 30
                                    }}
                                >
                                   <Entypo name="home" size={24} color={focused ? "#111" : "#fff"} />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="danhSach"
                    component={DanhSachHangHoa}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <FontAwesome name="list" size={24} color={focused ? "#16247d" : "#111"} />
                                    <Text style={{ fontSize: 12, color: "#16247d" }}>Danh Sách</Text>
                                </View>
                            )
                        }
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default index;