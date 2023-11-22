import {View, StyleSheet, Text, Image} from "react-native";

export default function WeatherComponent(){
    return(
        <View style ={styles.container}>
            <View style ={styles.card}>
                <View style ={styles.date}>
                    <Text style ={styles.Date}>Saturday, 14.10</Text>
                </View>
                <View style={styles.img}>
                    <Image source={require('./IconW.png')}
                           style={styles.icon}></Image>
                </View>
                <View style={styles.details}>
                    <Text style ={styles.degree}>24 °C</Text>
                    <Text style ={styles.city}>Timisoara</Text>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        alignItems:'center',
        borderRadius:30,
        height:'50%',
        width:'60%',
        backgroundColor:'#191D73',
        shadowOpacity:0.2,
        justifyContent:'space-evenly',

    },
    date:{
        alignItems:'center',
        padding:40,
        paddingTop:90,
    },
    Date:{
        fontWeight:'bold',
        color:'white',
        fontSize:17,
    },
    img:{
        alignItems:'center',
        width:'80%',
        height:'70%',
        paddingTop:50,
    },
    icon:{
        width:'150%',
        height:'90%',
    },
    details:{
       alignItems:'center',
        paddingBottom:90,
        gap:8,
    },
    degree:{
        fontWeight:'bold',
        color:'white',
        fontSize:22,
    },
    city:{
        color:'white',
        fontSize:16,
    }


})
