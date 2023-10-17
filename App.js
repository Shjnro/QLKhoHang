import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DanhSachHangHoa from './src/chuKho/DanhSachHangHoa';
import TongSoHangHoa from './src/chuKho/TongSoHangHoa';
import QuanLyHangHoa from './src/navigation/QuanLyHangHoa';

export default function App() {
  return (
    <View style={styles.container}>
      <QuanLyHangHoa/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
