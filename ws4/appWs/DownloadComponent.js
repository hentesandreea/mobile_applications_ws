import {View, StyleSheet, Image, Text} from "react-native";

export default function DownloadComponent(){
    return(
        <View style ={styles.container}>
            <View style ={styles.card}>
                <View style = {styles.text}>
                    <Text style={styles.name}>Resume - Mihai Pop</Text>
                    <Text style ={styles.subtext}>PDF File</Text>
                    <Text style ={styles.kbt}>23.59Kb</Text>
                </View>
                <View style ={styles.icon}>
                        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/189/189249.png'}}
                               style={styles.image}/>
            </View>

                </View>
            </View>

    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        alignItems:'center',
        width:350,
        height:104,
        borderRadius:14,
        backgroundColor:'white',
        shadowOpacity:0.3,

    },
    text:{
        alignItems:'flex-start',
    },
    name:{
        marginTop:16,
        marginRight:140,
        fontWeight:'bold',
        fontSize:16.5,

    },
    subtext:{
        color:'#54B435',
        fontSize:12,
    },
    kbt:{
        fontSize: 14,
        marginTop:18,
    },
    icon:{
        alignItems:'center',
        marginEnd:26,
        marginLeft:260,
        width:80,
        height:82,
    },
    image:{
     alignItems:'center',
        width:60,
        height:60,
        marginTop: -68,
        position:'absolute',
        right:2,



    },

})
