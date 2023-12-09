import {View,Image,Text} from "react-native";

const KAlbum = () => {
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <View style={{borderRadius:10, backgroundColor:'#FF842B', padding:20,shadowOpacity:0.2,height:'40%',width:'60%', gap:10}}>
                <View style={{flexDirection:'row',gap:30}}>
                <Image source={{uri:'https://images.unsplash.com/photo-1553378950-0ba726c8ca1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
                       style={{height:100,width:124,borderRadius:20}}
                />
                <Image source ={{uri:'https://cdn.icon-icons.com/icons2/3252/PNG/512/share_ios_regular_icon_204964.png'}}
                       style={{height:30, width:30}}
                />
                </View>
                <View style={{flexDirection:'column', gap:2}}>
                    <Text style={{fontSize:14}}>Joyce Lynn</Text>
                    <Text style={{fontSize:14, fontWeight:'600'}}>Nostalgy of us</Text>
                </View>
                    <Text style={{fontSize:15, fontWeight:'bold',color:'white',textShadowOffset:0.5}}>Nowhere, everywhere</Text>


            </View>

        </View>
    )
}

export default KAlbum;