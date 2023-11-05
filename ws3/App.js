import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
  export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.baseText}>Hello</Text>
      <StatusBar style="auto" />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9681EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 70,
    textTransform: 'capitalize',
  },
});
