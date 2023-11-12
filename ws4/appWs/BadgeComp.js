import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function BadgeComp() {
    return (
        <View style={styles.container}>
            <View style ={styles.legitimatie}>
                <View style ={styles.sus}>
                    <View style ={styles.circle}>
                    </View>
                    <View style ={styles.poza}>
                        <Image source={{uri:'https://i.redd.it/5ner97tt89831.jpg'}}
                               style={styles.image}/>
                    </View>

                </View>
                <View style ={styles.jos}>
                    <View style={styles.textContainer}>
                        <Text style={styles.firstName}>Andreea</Text>
                        <Text style={styles.lastName}>Henteș</Text>
                    </View>
                    <Text style={styles.subtext}>Student</Text>
                    <Image source={{uri:'https://raw.githubusercontent.com/poenaruiulian/into-react-native/main/working_with_components/logo.png'}}
                           style ={styles.logo}></Image>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F0E8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    legitimatie:{
        alignItems:'center',
        height:448,
        width: 249.5,
        borderRadius:40,
        backgroundColor:'white',
        shadowOpacity:0.32,
        overflow:'hidden',
    },
    sus:{
        backgroundColor:'#B15EFF',
        height:270,
        width:400,
        borderBottomEndRadius:260,
        borderBottomLeftRadius:260,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        alignItems:'center',
    },
    circle:{
        height:16,
        width:78,
        borderRadius:50,
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:30,
    },
    poza:{
        borderRadius:80,
        borderWidth:3,
        borderColor:'white',
        borderStyle:'dashed',
        width:130,
        height:130,
        marginTop:50,
        padding:10,
        alignItems:'center',
        justifyContent:'center',

    },
    image:{
        height:110,
        width:110,
        borderRadius:60,

    },
    textContainer:{
        marginTop:20,
        alignSelf:'center',
        flexDirection:"row",
        gap: 8,
    },
    firstName:{
        fontWeight:"bold",
        fontSize:22,
    },
    lastName:{
        fontSize:22,
    },

    subtext:{
        fontSize:16,
        color:'gray',
        alignSelf:'center',
        marginTop:4,
    },
    logo:{
        width:56,
        height:40,
        alignSelf:'center',
        marginTop:20,
    },
    jos:{
        overflow:'hidden',
    }

});
