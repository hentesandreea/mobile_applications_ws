import {View, Image, Text, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import KSpace from "./KSpace";



const KAlbum = () => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/*<LinearGradient
                colors={['#FF842B', '#fc3d03']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={{flex: 1}}>*/}
                <View style={{borderRadius: 20,backgroundColor:'#FF842B' ,padding: 20, shadowOpacity: 0.2, height: '30%', width: '90%', gap: 10}}>
                    <View style={{flexDirection: 'row', gap: 16}}>
                        <Image
                            source={{uri: 'https://images.unsplash.com/photo-1553378950-0ba726c8ca1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
                            style={{height: 160, width: 160, borderRadius: 20}}
                        />
                        <View style={{flexDirection: 'column', gap: 3,justifyContent:'center'}}>
                            <KSpace h={6}/>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '700',
                                color: 'black',
                                textTransform: 'uppercase',
                                letterSpacing: 0.6
                            }}>Nowhere you</Text>
                            <Text style={{fontSize: 18, fontWeight: '600', letterSpacing: 0.6}}>Joyce Lynn</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: 'white',
                                textTransform: 'uppercase',
                                letterSpacing: 0.6
                            }}>album</Text>
                            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', letterSpacing: 0.6}}>Pop ~
                                2021</Text>
                            <KSpace h={3}/>
                            <TouchableOpacity onPress={() => alert('Play album')}
                                style={{alignItems:'center'}}>
                                <Image source={{uri:'https://static.thenounproject.com/png/117815-200.png'}}
                                       style={{width:48,height:48}}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            {/*</LinearGradient>*/}
        </View>
    )
}

export default KAlbum;