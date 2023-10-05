import { Button } from "@rneui/base";
import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    MaDonHang: "1",
    MaHangHoa: "BanhNgot",
    ThoiGianThue: "12/3/2023",
    SoTien: 500,
    TinhTrangDonHang: "dang luu kho ",
    ThoiGianKyKetHopDong: "20/2/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "sua",
    ThoiGianThue: "22/8/2023",
    SoTien: 500,
    TinhTrangDonHang: "dan bao quan lanh ",
    ThoiGianKyKetHopDong: "30/4/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "BanhNgot",
    ThoiGianThue: "12/2/2023",
    SoTien: 500,
    TinhTrangDonHang: "dang luu kho ",
    ThoiGianKyKetHopDong: "10/4/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "noi nhon",
    ThoiGianThue: "12/8/2023",
    SoTien: 500,
    TinhTrangDonHang: "chua ky ket hop dong",
    ThoiGianKyKetHopDong: "20/4/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "nuoc giai khac",
    ThoiGianThue: "12/8/2023",
    SoTien: 500,
    TinhTrangDonHang: "da xuat kho ",
    ThoiGianKyKetHopDong: "20/4/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "BanhNgot",
    ThoiGianThue: "12/8/2023",
    SoTien: 500,
    TinhTrangDonHang: "dang luu kho ",
    ThoiGianKyKetHopDong: "20/4/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "BanhNgot",
    ThoiGianThue: "12/3/2023",
    SoTien: 500,
    TinhTrangDonHang: "dang luu kho ",
    ThoiGianKyKetHopDong: "20/2/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "sua",
    ThoiGianThue: "22/8/2023",
    SoTien: 500,
    TinhTrangDonHang: "dan bao quan lanh ",
    ThoiGianKyKetHopDong: "30/4/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "BanhNgot",
    ThoiGianThue: "12/2/2023",
    SoTien: 500,
    TinhTrangDonHang: "dang luu kho ",
    ThoiGianKyKetHopDong: "10/4/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "nui nhon",
    ThoiGianThue: "12/8/2023",
    SoTien: 500,
    TinhTrangDonHang: "chua ky ket hop dong",
    ThoiGianKyKetHopDong: "20/4/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "nuoc giai khac",
    ThoiGianThue: "12/8/2023",
    SoTien: 500,
    TinhTrangDonHang: "da xuat kho ",
    ThoiGianKyKetHopDong: "20/4/2010",
  },
  {
    MaDonHang: "1",
    MaHangHoa: "BanhNgot",
    ThoiGianThue: "12/8/2023",
    SoTien: 500,
    TinhTrangDonHang: "dang luu kho ",
    ThoiGianKyKetHopDong: "20/4/2010",
  },
];

// type ItemProps = { title: string };

const OderLiat = () => {
  const Boxes = () => {
    return (
      <View style={styles.boxes}>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Left button pressed")}
        >
          <Text style={styles.text}>Don Chua Hoang Thanh</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Left button pressed")}
        >
          <Text style={styles.text}>Don Da Hoang Thanh</Text>
        </Pressable>
      </View>
    );
  };
  const ListItem = () => {
    return (
        <SafeAreaView style={styles.boxesList}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
            <View style={styles.setTop}>
              <Text style={styles.title}>Ma Don Hang:{item.MaDonHang}</Text>
              <Text style={[styles.title,{marginLeft:100}]}>Thoi Gian Thue:{item.ThoiGianThue}</Text>
            </View>
              <Text style={styles.title}>{item.MaHangHoa}</Text>
              <Text style={styles.title}>{item.TinhTrangDonHang}</Text>
              <Text style={styles.title}>{item.SoTien}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Boxes />
      <ListItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
  },
  item: {
    height: 120,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#00feff",
  },
  title: {
  fontSize: 13,
  margin: 6,
  },
  boxes: {
    marginTop:50,
    width: "100%",
    height: "9%",
    flexDirection: "row",

  },
  boxesList:{
    height: "91%",
  },
  button: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    fontSize: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor:"blue",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "balck",
  },
  setTop:{
  width: "100%",
  flexDirection: "row",
  }
});

export default OderLiat;
