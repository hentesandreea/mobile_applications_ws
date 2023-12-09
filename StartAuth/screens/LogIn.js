import {View, TouchableOpacity, StyleSheet, Text, Image, TextInput} from "react-native";
import {useNavigation} from "@react-navigation/native";
import KSpacing from "../components/KSpacing";

export default function LogIn(props){
    const navigator = useNavigation()
    return(
        <View style={{  backgroundColor: '#BEADFA',flex:1,alignItems:'center',paddingTop:100}}>
            <Image source={{uri:"https://images.unsplash.com/photo-1640379878948-72b9db349e17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                   style ={{borderRadius:100,height:'20%',width:'32%'}}>
            </Image>
            <KSpacing h={40}/>
        <Text style={{fontSize:20, fontWeight:500, padding:10}}>Welcome back to your profile!</Text>
            <KSpacing h={20}/>
            <TextInput style={{padding:10, backgroundColor:'white',width:'80%',borderRadius:10, borderWidth:0.5, borderStyle:'solid',height:50}}
                       placeholder={'Introduce username...'}
            />
            <KSpacing h={18}/>
            <TextInput style={{padding:10, backgroundColor:'white',width:'80%',borderRadius:10, borderWidth:0.5, borderStyle:'solid',height:50}}
                       placeholder={'Introduce password...'}
                       secureTextEntry={true}
            />
            <KSpacing h={40}/>
            <TouchableOpacity style={{ backgroundColor:'pink', width:'50%', padding:10,  borderRadius:10, alignItems:'center', shadowOpacity:0.1,}}>
            <Text style={{fontSize:18, fontWeight:400,}}>Log In</Text>
            </TouchableOpacity>
            <KSpacing h={30}/>
            <View style={{flexDirection:'row', gap:6}}>
                <Text style={{ fontSize:14, color:'#3C4048'}}>Do not have an account?</Text>
            <TouchableOpacity onPress={()=>navigator.goBack()}>
                <Text style={{fontSize:14, fontWeight:400, color:"black",textDecorationLine:'underline'}}>Register</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

})