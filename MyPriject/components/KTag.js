import {View,Text} from "react-native";
const KTag = ({title,color}) =>{
    return(
            <View style= {{ backgroundColor: color,padding:10, borderRadius:10,alignItems:'center'}}>
                <Text style={{fontSize:12, color:'black', fontWeight:'bold'}}>{title}</Text>
            </View>

    )
}
export default KTag;