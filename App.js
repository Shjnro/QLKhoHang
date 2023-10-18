import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListThongKe from "./src/chuKho/ListThongKe"
import BarChar_NhapXuat from "./src/chuKho/BarChar_NhapXuat"
import ListChucNangTK from "./src/chuKho/ListChucNangTK"
import Navigation from "./src/navigation/NavigationC"

const App = () => {
   return (
    <Navigation/>
   )
 }
 
 export default App
 
 const styles = StyleSheet.create({})
// export default function App() {
//   return (
//     <View style={styles.container}>
//        <ListThongKe/>
//       {/* <BarChar_NhapXuat/> */}
//       {/* <ListChucNangTK/> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
