import React from 'react';
import {Image, StyleSheet, Text, View,ScrollView} from "react-native";
import KTag from "../components/KTag";
import KSpacer from "../components/KSpacer";

const listOfParam = ['Design','Business','UI/UX','Software','Manager','Marketing','It','Accounting']
const listOfUnused =['Psychology','Medicine','Sales','Office','Human Resources','Finance','Law & Legal','Tester','Aministrative','Music','Nursery']

 export default function Profile(props) {
    return (
        <ScrollView contentContainerStyle={styles.cont}>
        <View style={styles.container}>
            <KSpacer h={40}/>
            <View style={{alignItems:'center',paddingTop:10,borderRadius:20,backgroundColor:'#7071E8',overflow:'hidden'}}>
            <Image source={{uri:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                   style={{width:80,height:80, borderWidth:0.2, borderColor:'white',borderRadius:100}}/>
                <KSpacer h ={4}/>
                <Text style={{fontSize:16, fontWeight:600, paddingTop:10}}>Maria Elena Jones </Text>
            <KSpacer h={20}/>
            <View style ={{width:'90%',backgroundColor:'pink',borderBottomEndRadiusRadius:20,flexDirection:'column',gap:6,justifyContent:'center',padding:10}}>
                <Text style={{fontSize:13, fontWeight:'bold',textAlign:'center'}}>Education and work experience</Text>
                <KSpacer h={6}/>
                <View style={{flexDirection:'row', gap: 12}}>
                    <Text style ={{fontSize:12,fontWeight:'bold'}}>High School(2015-2019)</Text>
                    <Text style={{fontSize:12,fontStyle:'italic',fontWeight:600}}>Melbourne HighSchool</Text>
                </View>
                <View style={{flexDirection:'row', gap: 12}}>
                    <Text style ={{fontSize:12,fontWeight:'bold'}}>University(2019-2022)</Text>
                    <Text style={{fontSize:12,fontStyle:'italic',fontWeight:600}}>Science, Arts Univeristy</Text>
                </View>
                <View style={{flexDirection:'row', gap: 12}}>
                    <Text style ={{fontSize:12,fontWeight:'bold'}}>Experience(2022-pres.)</Text>
                    <Text style={{fontSize:12,fontStyle:'italic',fontWeight:600}}> Lead Graphic Designer</Text>
                </View>
                <View style={{flexDirection:'row', gap:12,padding:10,justifyContent:'center'}}>
                    <Text style={{fontSize:13,fontWeight:600, color:'black'}}>Contact:</Text>
                    <Text style={{fontSize:13,fontWeight:600,color:'purple',textDecorationLine:'underline'}}>mariaelena@gmail.com</Text>
                </View>

            </View>
            </View>
            <KSpacer h={20}/>
            <Text style={{fontSize:16, fontWeight:600,padding:10}}>Selected tags</Text>
            <View style ={{alignItems:'center', justifyContent:'center',flexDirection:'column', width:'90%',backgroundColor:'pink',borderRadius:10, padding:10}}>
            <View style={{alignItems:'flex-start',flexDirection:'row', gap:6, flexWrap:'wrap'}}>
                {
                    listOfParam.map(el => <KTag color={'#C683D7'} title={el} />)
                }

            </View>
        </View>
            <KSpacer h={20}/>
            <Text style={{fontSize:16, fontWeight:600,padding:10}}>More tags</Text>
            <View style={{alignItems:'flex-start',justifyContent:'center',width:'90%',backgroundColor:'pink',borderRadius:10,flexDirection:'column',gap:6}}>
                <View style={{alignItems:'flex-start',flexDirection:'row', gap:6, flexWrap:'wrap',padding:10}}>
                    {
                      listOfUnused.map(el => <KTag color={'white'} title={el} />)
                    }
                </View>
            </View>



        </View>
            </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        paddingTop:30,
    }
});

