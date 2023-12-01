import {View,TouchableOpacity,StyleSheet,Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function LogIn(props){
    const navigator = useNavigation()
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigator.goBack()}>
                <Text style={{fontSize:14, fontWeight:"bold", color:"black"}}>Go to Home Screen</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BEADFA',
        alignItems: 'center',
        justifyContent:'center',
    },
})