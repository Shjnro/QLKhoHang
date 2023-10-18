import { View, Text } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts';
import { StyleSheet } from 'react-native'; 
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 



export default function BarCharts() {
  const navigation = useNavigation();
  const barData = [
    {
      value: 40,
      label: 'Jan',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 20, frontColor: '#ED6665' },
    {
      value: 50,
      label: 'Feb',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 40, frontColor: '#ED6665' },
    {
      value: 75,
      label: 'Mar',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 25, frontColor: '#ED6665' },
    {
      value: 30,
      label: 'Apr',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 20, frontColor: '#ED6665' },
    {
      value: 60,
      label: 'May',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 40, frontColor: '#ED6665' },
    {
      value: 65,
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 30, frontColor: '#ED6665' },
  ];

  const renderTitle = () => {
    return (
      <View style={{ marginVertical: 30 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }} onPress={()=>navigation.navigate('ListChucNangTK')}>
           
          Bảng thống kê nhập xuất
        </Text>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 24,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#177AD5',
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
                color: 'lightgray',
              }}>
              Nhập
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#ED6665',
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
                color: 'lightgray',
              }}>
              Xuất
            </Text>
          </View>
        </View>
      </View>
    )
  }

  const TableExample = () => { 
  return ( 
    <DataTable style={styles.container}> 
      <DataTable.Header style={styles.tableHeader}> 
        <DataTable.Title>Tên kho</DataTable.Title> 
        <DataTable.Title>Nhập </DataTable.Title> 
        <DataTable.Title>Xuất</DataTable.Title> 
      </DataTable.Header> 
      <DataTable.Row> 
        <DataTable.Cell>Kho Binh an</DataTable.Cell> 
        <DataTable.Cell>50</DataTable.Cell> 
        <DataTable.Cell>23</DataTable.Cell> 
      </DataTable.Row> 
  
      <DataTable.Row> 
        <DataTable.Cell>Kho An Binh</DataTable.Cell> 
        <DataTable.Cell>20</DataTable.Cell> 
        <DataTable.Cell>26</DataTable.Cell> 
      </DataTable.Row> 
      <DataTable.Row> 
        <DataTable.Cell>Kho Tuan Loi</DataTable.Cell> 
        <DataTable.Cell>49</DataTable.Cell> 
        <DataTable.Cell>20</DataTable.Cell> 
      </DataTable.Row> 
      <DataTable.Row> 
        <DataTable.Cell>Kho Tuan binh</DataTable.Cell> 
        <DataTable.Cell>20</DataTable.Cell> 
        <DataTable.Cell>24</DataTable.Cell> 
      </DataTable.Row> 
    </DataTable> 
  ); 
}; 
  

  const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    tableHeader: {
      backgroundColor: '#DCDCDC',
    },
  });

  return (
    <View style={{height:"100%"}}>
      <View style={{
        height:"35%",
        marginTop:60,
        }}>
        {TableExample()}
        
      </View>

      <View
        style={{
          height:"50%",
          padding: 15,
          margin: 10,
          backgroundColor: '#333340',
          paddingBottom: 40,
          borderRadius: 10,
          
        }}>
        {renderTitle()}
         
        <BarChart
          data={barData}
          barWidth={8}
          spacing={24}
          roundedTop
          roundedBottom
          hideRules
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{ color: 'gray' }}
          noOfSections={3}
          maxValue={75}
        />
      </View>
    </View>
  )
}


