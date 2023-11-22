import {View,StyleSheet,Image, Text} from 'react-native';
export default function KHeader(){
    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                   {/* <View style ={styles.arrCont}>*/}
                        <Image source ={{uri:"https://cdn-icons-png.flaticon.com/512/109/109618.png"}}
                            style={styles.arrow}>
                        </Image>
                    {/*</View>*/}
                <View style={styles.person}>
                    <View style={styles.PhotoCont}>
                        <Image source={{uri:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                               style={styles.portrait}>
                        </Image>
                    </View>
                <View style={styles.textpropr}>
                    <Text style ={styles.name}>Ioana Maria</Text>
                    <Text style={styles.details}>Last seen at 11:22 AM</Text>
                </View>
                </View>
                <View style ={styles.icons}>
                <Image source={{uri:"https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Phone-Call-Telephone-512.png"}}
                        style ={styles.phone}>
                </Image>
                <Image source={{uri:"https://icons.iconarchive.com/icons/icons8/android/256/Photo-Video-Video-Call-icon.png"}}
                       style ={styles.video}>
                </Image>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2311/2311523.png"}}
                       style ={styles.dots}>
                </Image>
                </View>
            </View>
            </View>
    )}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    container:{
        height:'16%',
        width:'96%',
        backgroundColor:'white',
        padding:10,
        paddingTop:40,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        gap:2,
        shadowOpacity:0.4,

    },
    arrow:{
      height:12,
        width:16,
    },
    person:{
        alignItems:'center',
        height:'26%',
        width:'48%',
        flexDirection:'row',
        gap:10,

    },
    PhotoCont:{
        width: 38,
        height: 38,
        borderRadius: 100 / 2,
        alignItems:'center',
        borderColor:'black',
    },
    portrait:{
        width:'100%',
        height:"100%",
        borderRadius:100,
    },
    textpropr:{
        alignItems:'left',
        flexDirection:'column',
        gap:1.5,
    },
    name:{
        fontSize:12,
        fontWeight:'bold',
    },
    details:{
        fontSize:8,
    },
    phone:{
        height:18,
        width:16,
    },
    video:{
        height:18,
        width:20,
    },
    dots:{
        height:18,
        width:18,
    },
    icons:{
        height:'16%',
        width:'26%',
        flexDirection:'row',
        gap:20,
        alignItems:'center',
        marginBottom:10,
        padding:2,
        justifyContent:'space-evenly',

    },

})
