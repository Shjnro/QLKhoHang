import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OderLiat from './src/chuKho/OrderLiat';
import OrderDetailScreen from './src/chuKho/OrderDetailScreen';
import month from './src/chuKho/month';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    // <OderLiat/>
    // {/* <OrderDetailScreen/> */}
    // </View>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="OderLiat" component={OderLiat} options={{headerShown:false}} />
        <Stack.Screen name="month" component={month} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
