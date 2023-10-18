import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListThongKe from "../chuKho/ListThongKe"
import BarChar_NhapXuat from "../chuKho/BarChar_NhapXuat"
import ListChucNangTK from "../chuKho/ListChucNangTK"

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListChucNangTK" component={ListChucNangTK}  />
        <Stack.Screen name="ListThongKe" component={ListThongKe} />
        <Stack.Screen name="BarChar_NhapXuat" component={BarChar_NhapXuat} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation

const styles = StyleSheet.create({})

