import {View, StyleSheet, Image, Text, TouchableOpacity, TextInput, Touchable} from "react-native";

export default function LoginPage(){
    return(
        <View style={styles.container}>
                <View style ={styles.imgCont}>
                    <Image source={{uri:"https://images.unsplash.com/photo-1640379878948-72b9db349e17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                           style ={styles.image}>
                    </Image>
                </View>
                <Text style ={styles.welcome}>Welcome to your favourite app!</Text>
            <View style ={styles.inputs}>
                <TextInput style={styles.username} placeholder={'Introduce username...'}></TextInput>
                <TextInput secureTextEntry={true} style ={styles.password} placeholder={'Introduce password...'}></TextInput>
                <View style={styles.creatingAcc}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert("Account have been created")}
                    >
                        <Text style={styles.register}>Register</Text>
                    </TouchableOpacity>
                    <View style ={styles.texts}>
                        <Text style ={styles.question}>Already have an account?</Text>
                        <Text style={styles.login}>Log In</Text>
                    </View>

                </View>
            </View>
        </View>


    )
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#BEADFA',
            alignItems: 'center',
           justifyContent:'center',
    },
    textimgCont:{
            height:'90%',
            width:'90%',
        alignItems:'center',
      justifyContent:'center',
        padding:10,
    },
    imgCont:{
        width:'22%',
        height:'12%',
        borderRadius:20,
    },
    image:{
            width:'100%',
        height:'100%',
        borderRadius:100,
    },
    welcome:{
            fontSize:18,
            padding:10,
        fontWeight:400,
        paddingTop:30,

    },
    inputs:{
            height:'40%',
        width:'90%',
        alignItems:'center',
        padding:30,
        flexDirection:'column',
        gap:16,
    },
    username:{
            padding:10,
        backgroundColor:'white',
        borderStyle:'solid',
        borderWidth:0.5,
        borderRadius:10,
        height:46,
        width:"96%",
    },
    password:{
        padding:10,
        backgroundColor:'white',
        borderStyle:'solid',
        borderWidth:0.5,
        borderRadius:10,
        height:46,
        width:'96%',
    },
    creatingAcc:{
            width:'90%',
        height:'40%',
        alignItems:'center',
        paddingTop:30,
        gap:16,

    },
    button:{
            backgroundColor:'#FF6AC2',
            width:'60%',
        padding:10,
        borderWidth:0.5,
        borderRadius:10,
        alignItems:'center',
        shadowOpacity:0.1,
    },
    register:{
       fontSize:16,
        fontWeight:400,

    },
    texts:{
        width:'90%',
        height:'60%',
        alignItems:'center',
        paddingTop:10,
        flexDirection:'row',
        gap:6,
    },
    question:{
            fontSize:14,
        color:'#3C4048',
    },
    login:{
            fontSize:14,
            textDecorationLine:'underline',
        color:'#3C4048',
    },
})