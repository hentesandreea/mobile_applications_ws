import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function BasicComponents() {
    return (
        <View style={styles.container}>
            <Text style ={styles.text}>{"Welcome to the 4th\nMobile Applications Workshop"}</Text>
            <TextInput style={styles.input} placeholder={'Type something'}></TextInput>
            <Image style={styles.image} source ={{uri:"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"}}></Image>
            {/*<Button  title={'Click me'} onPress={()=>alert("Hello")}/>*/}
            <TouchableOpacity
                style={styles.button}
                onPress={()=>alert("hi")}
            >
                <Text style={styles.subtext}>Hello</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1EB90',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    text:{
        color:'#1640D6',
        fontSize:16,
        fontStyle:'italic',
        textAlign:"center"
    },
    input:{
        backgroundColor:'#9FBB73',
        borderStyle:'dashed',
        borderWidth:2,
    },
    image:{
        width:70,
        height:70,
        borderRadius:40,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'#1640D6',

    },
    button:{
        borderRadius:2,
        backgroundColor:'#1640D6',
        width:80,
        height:30,

    },
    subtext:{
        color:'white',
        textAlign:'center',
        fontSize:20,

    }



});
