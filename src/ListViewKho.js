import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Test() {
 return (
     
      <View style= {styles.container}>
          <View style = {styles.box1}>
              <View style = {styles.view1}>
              <Text>Danh sách các kho đang hoạt động </Text>
          </View>
              <View style = {styles.view2}>
          </View>
              <View style = {styles.view3}>
          </View>
          </View>
          <View style = {styles.box2}>
          </View>
        
      </View>
     
      
    );
    
   
  
}

const styles = StyleSheet.create({
    container: {
     
   
      flex: 1,
        flexDirection: 'row',
        
        backgroundColor: 'black'
    },
    box1 : {
      backgroundColor : 'red',
      with : 80,
      height : '100%',
      flex : 1

    },
     box2 : {
      backgroundColor : 'yellow',
      with : 100,
      height : '100%',
      flex: 3
    },
     view1 : {
       height: "33.3%",
       backgroundColor: 'pink',
       alignItems: 'center'
      

    },
    view2 : {

       height: "33.3%",
       backgroundColor: 'blue',

    },
    view3 : {
       height: '33.3%',
       backgroundColor: 'green',

    },

})