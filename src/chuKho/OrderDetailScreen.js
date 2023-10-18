import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    Pressable,
    Alert,
    TextInput,
    Image,
    Modal,
  } from "react-native";

  const DATA = 
    {
      id: "1",
      MaDonHang: "1",
      MaKhachHang: "kh1",
      TenKhachHang: "khach hang 1",
      TenKhoHang: "kho 1",
      GiaThueTrenThang:1000,
      TongTien:60000,
      TienCoc:500,
      LoaiKho:"kho bao quan do kho ",
      DiaChiKho:" Nguyen thue",
      AnhKhoHang:
        "https://png.pngtree.com/png-vector/20191017/ourlarge/pngtree-warehouse-inventory-line-icon-vector-png-image_1820365.jpg",
      DiaChiKhachHang: "HCM CT",
      LuuLuongHangHoa: "300 met",
      DienTichThue: "400 met",
      NgayThang: "2023-01-20",
    };
  




const OrderDetailScreen = () => {
  const userInput = useState(DATA);
// let date 
  // const FlatListData = (item) => {
  //     return (
        
  //     );
  // };
    return (
        <View style={styles.container}>
          <View style={styles.item}>
            <View style={styles.leftItem}>
              <Text style={styles.text}>{DATA.MaDonHang}</Text>
            </View>
            <View style={styles.rightItem}>
              <Text style={styles.text}>MaKho: {DATA.MaDonHang}</Text>
              <Text style={styles.text}>TenKH: {DATA.TenKhachHang}</Text>
              <Text style={styles.text}>DiaChi: {DATA.DiaChiKhachHang}</Text>
              <Text style={styles.text}>LuuLuong: {DATA.LuuLuongHangHoa}</Text>
              <Text style={styles.text}>LuuLuong: {DATA.LuuLuongHangHoa}</Text>
              <Text style={styles.text}>LuuLuong: {DATA.LuuLuongHangHoa}</Text>
              <Text style={styles.text}>LuuLuong: {DATA.LuuLuongHangHoa}</Text>
              <Text style={styles.text}>LuuLuong: {DATA.LuuLuongHangHoa}</Text>
              <Text style={styles.text}>LuuLuong: {DATA.LuuLuongHangHoa}</Text>
            </View>
          </View>
  
        {/* <View style={styles.box}>
        <View style={styles.box1}>
        <Text style={{fontSize:30}}>Chi Tiet Don Hang</Text>
        </View>
        <View style={styles.box2}>
            <Text style={styles.text}>Ma Khach Hang</Text>
            <Text>Email</Text>
            <Text> So Dien Thoai</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.text}>Ten Kho</Text>
        <Text style={styles.text}>Dia Chi Kho</Text>
        <Text style={styles.text}>Loai Kho</Text>
        <Text style={styles.text}>Dien Tich Thue</Text>
        <Text style={styles.text}>Thoi Gian Thue</Text>
        <Text style={styles.text}>Gia thue tren thang </Text>
        <Text style={styles.text}>Tong Tien</Text>
        <Text style={styles.text}>Tien Coc</Text>
        </View>
        </View> */}
        </View>
    );
};

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
  //FlatList
  item: {
    margin: 10,
    backgroundColor: "#00feff",
  },
  list:{
    width: "100%",
    height:"100%"
  },
  boxesList: {
    backgroundColor:"red"
  },
  //boxes
  leftItem: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  rightItem: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
  },
  });
export default OrderDetailScreen;