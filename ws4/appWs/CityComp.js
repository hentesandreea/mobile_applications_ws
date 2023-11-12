import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CityComp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={{uri:"https://xn--urlaub-in-rumnien-2qb.de/wp-content/uploads/2017/10/DJI_0203-1-1-1.jpg"}}
                       style={styles.image}>
                </Image>
                <View style ={styles.text}>
                    <Text style={styles.title}>Timisoara</Text>
                    <Text style={styles.descript}>Timisoara is 2023 Cultural European Capital.</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.butText}>Show more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        backgroundColor:'#FF9130',
        width:330,
        height:338,
        borderRadius:20,
        alignItems:'center'
    },
    image:{
        width:300,
        height:162,
        marginTop:20,
        borderRadius:10,
    },
    text:{
        padding:10,
        alignItems:'left',
    },
    title:{
        textDecorationStyle:"solid",
        fontSize: 18,
        textTransform:'uppercase',
        fontWeight:'bold',
        marginTop:4,
    },
    descript:{
        fontSize:15,
        marginTop:6,
    },
    button:{
        backgroundColor:'#FECDA6',
        borderRadius:10,
        width:170,
        height:40,
        marginBottom:100,
        shadowOpacity:0.1,
    },
    butText:{
        marginTop:10,
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:16,
    },
});
export default CityComp;
