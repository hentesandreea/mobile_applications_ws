import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
  export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.screen}>
        <View style ={styles.circle}>
        </View>
      <Image style ={styles.image} source={require('./welcome.png' +
          '')}></Image>
      <View styles ={styles.scris}>
      <Text style ={styles.baseText}>Happy to meet! </Text>
      </View>
        <View style={styles.cont}>
          <View style={styles.circ}>
            <Text style={styles.text}> Next </Text>
          </View>
        </View>
        <View style ={styles.button}>
        </View>
      <StatusBar style="auto" />
    </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  screen: {
    backgroundColor:'#FFEA20',
    borderRadius: 40,
    alignItems:'center',
    height:578,
    width: 270,
    marginTop:'6%',
    marginHorizontal: '20%',
    borderStyle:'solid',
    shadowOpacity: 0.2,


  },

  circle:{
    backgroundColor:'black',
    width: 60,
    height: 10,
    borderRadius: 10,
    marginTop:30,
    shadowOpacity: 0.1,
    textShadowColor:'gray',
  },
  baseText: {
    fontWeight: 'bold',
    alignSelf:'center',
    fontSize: 28,
    textTransform: 'normal',
    marginBottom:100,
   margin: 10,
    color:'black',


  },
  scris: {
    flex: 1,
    backgroundColor:'#FBFF46',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  image: {
    alignSelf: 'center',
    marginTop: 28,
    width:240,
    height:260,
    borderRadius: 20,
    margin:14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  cont: {
    backgroundColor:'white',
    width: 100,
    height:44,
    marginTop:-68,
    borderRadius:8,
    borderCurve:"circular",



  },
  text: {
    color:'black',
    alignSelf:'center',
    marginTop:8,
    fontWeight:'bold',
    fontSize:20,
  },

  button:{
    width: 54,
    backgroundColor:'black',
    height: 54,
    borderRadius: 80,
    alignSelf:'center',
    margin:46,
    shadowOffset:{ width: 0, height: 2 },
   shadowOpacity:0.6,
    textShadowColor:'gray',



  },
});
