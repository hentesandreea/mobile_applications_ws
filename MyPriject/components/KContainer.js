import {StyleSheet, TouchableOpacity,Text, View} from "react-native";
import KTag from "./KTag";

const KContainer = ({title,date,decription,income,tagTitle}) =>{
    return(
            <View style ={styles.sugesstion}>
                <Text style ={{paddingTop:10, fontSize: 13, textAlign:'center', paddingBottom:10, fontStyle:'italic'}}>{date}</Text>
                <View style={styles.Title}>
                    <KTag
                        color={'#C683D7'}
                        title={tagTitle}/>
                    <Text style={{ fontSize:15,
                        fontWeight:'bold'}}>{title}</Text>
                </View>
                <View style={styles.descriptCont}>
                    <Text style={{  fontSize:15,}}>{decription}</Text>
                    <Text style ={{fontSize:14, fontWeight:'bold'}}>{income}</Text>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.button} onPress={() => alert('Notification sent. You will be contacted by email.')}>
                            <Text style ={styles.butText}>Interested</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    sugesstion:{
        backgroundColor:'#FFC7C7',
        width:'90%',
        borderRadius:10,
        padding:10,
        shadowOpacity:0.1,
        flexDirection:'column',
    },
    Title:{
        width:'100%',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        paddingHorizontal:10,

    },
    descriptCont:{
        width:'100%',
        gap:4,
        paddingHorizontal:10,
    },
    income:{
        fontSize:14,
        fontWeight:'bold',
    },
    buttonView:{
        width:'100%',
        paddingTop:10,
        alignItems:'center',
    },
    button:{
        width:'50%',
        padding:10,
        borderRadius:10,
        backgroundColor:'#7071E8',
        alignItems:'center',
        justifyContent:'center',
    },
    butText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
    },

});
export default  KContainer;

