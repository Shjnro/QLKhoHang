import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OderLiat from './Screens/OrderLiat'

export default function App() {
  return (
    <View style={styles.container}>
    {/* view header */}
    <View style={styles.header}/>
    {/*view main */}
    <View style={styles.main}>
      <OderLiat/>
    </View>
    {/* view footer */}
    <View style={styles.footer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
  backgroundColor:'black',
  height:'10%',
  width:'100%',
  },
  main: {
  height:'80%',
  width:'100%',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor:'orange',

  },
  footer: {
  height:'10%',
  width:'100%',
  backgroundColor:'blue',
  },
});
