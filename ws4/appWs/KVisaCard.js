import {View,StyleSheet, Image,Text} from "react-native";

const KVisaCard = () =>{
    return(
    <View style={styles.screen}>
        <View style={styles.card}>
            <View style={styles.image}>
                <Image source ={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1199px-Mastercard_2019_logo.svg.png"}}
                       style = {styles.mastercard}>
                </Image>
            </View>
            <View style={styles.tCont}>
                <Text style ={styles.textNumb}>CARD NUMBER</Text>
                <Text style={styles.number}>1234  5678  9123  4567</Text>
            </View>
            <View style={styles.downCard}>
                <View style ={styles.details}>
                <View style={styles.personal}>
                    <Text style={styles.cardH}>CARD HOLDER</Text>
                    <Text style={styles.name}>John Doe</Text>
                </View>
                <View style={styles.expr}>
                    <Text style={styles.expires}>EXPIRES</Text>
                    <Text style ={styles.date}>05/27</Text>
                </View>
                <View style={styles.img}>
                    <Image source={{uri:"https://logodix.com/logo/1153460.png"}}
                           style ={styles.visa}>
                    </Image>
                </View>
            </View>
            </View>

    </View>
    </View>
    )
}

const styles =StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        width:"90%",
        height:"30%",
        borderRadius:20,
        backgroundColor:'#001B79',
        padding:20,
        justifyContent:'space-evenly',
        flexDirection:'column',
        gap:12,
        shadowOpacity:0.2,

    },
    image:{
        height:22,
        width:18,
        alignSelf:'flex-end',
        paddingRight:20,


    },
    mastercard:{
        height:22,
        width:36,
       alignSelf:'center',

    },
    tCont:{
        height:'30%',
        width:'100%',
        padding:10,
        gap:2,

    },
    textNumb: {
        fontSize: 10,
        color: 'white',
        fontStyle: 'normal',
    },
    number:{
        fontSize:22,
        color:'white',
        textShadowRadius:10,
    },
    downCard:{
        paddingTop:12,
    },
    details:{
        width:'100%',
        paddingTop:10,
        flexDirection:'row',
        gap:40,
    },
    personal:{
        width:'30%',
       padding:10,
        flexDirection:'column',
        gap:2,

    },
    cardH:{
        fontSize:8,
        color:'white',
    },
    name:{
        color:'white',
        fontSize:12,
        fontWeight:'bold',
    },
    expr:{
        padding:10,
        width:'30%',
        flexDirection:'column',
        gap:2,
    },
    expires:{
        fontSize:8,
        color:'white',
    },
    date:{
        color:'white',
        fontSize:12,
        fontWeight:'bold',
    },
    img:{
        height:'38%',
        width:'18%',
        alignSelf:'center',
        paddingRight:10,
    },
    visa:{
        height:'100%',
        width:'100%',
    },

});
export default KVisaCard;