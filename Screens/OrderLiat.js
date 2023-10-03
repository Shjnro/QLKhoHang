import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const OderLiat = () => {
  const Boxes = () =>{
    return(
      <View style={[styles.boxes,{backgroundColor:'yellow'}]}>
      <View style={[styles.boxesitem,{backgroundColor:'blue'}]}></View>
      <View style={[styles.boxesitem,{backgroundColor:'red'}]}></View>
      </View>
    );
  };
  const ListItem = () =>{
    return(
      <SafeAreaView style={styles.boxesList}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      </SafeAreaView>
    );
  };
  return (
    <SafeAreaView  style={styles.container}>
    <Boxes/>
    <ListItem/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
  width:'100%',
  },
  item: {
    height:60,
    marginTop:10,
    backgroundColor:'yellow'
  },
  title: {
    fontSize: 32,
  },
  boxes: {
    height:'12%',
    flexDirection:'row',
  },
  ListItem:{
  height:'85%'

  },
  boxesitem:{
    width:'50%',
  },
  boxesTop:{
    height:'15%',
  },
});

export default OderLiat;