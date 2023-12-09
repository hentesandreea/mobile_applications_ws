import {StyleSheet, TouchableOpacity, Text, View,  SafeAreaView, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import KContainer from "../components/KContainer";
import KSpacer from "../components/KSpacer";

const listOfCards = [{
    title:'Graphic Designer',
    date:'Posted:11/11/23 by DesignCo',
    decription:'You will make animations and designs for kids books and also you will work in other projects.',
    income:'Estimated income: 480-550$',
    tagTitle:'Design'},

    { title:' Junior Accountat',
    date:'Posted:12/11/23 by Contax',
    decription:'You will posting journal entries, updating financial statements, maintaining accounts receivable and accounts payable, paying monthly payroll, and preparing financial reports.',
    income: 'Estimated income: 500-600$' ,
    tagTitle:'Accountig'},

    {title:'UI/UX Designer',
    date:'Posted:12/11/23 by CrazyDesign',
    decription:' You will create the user interface for an app, website, or other interactive media. Your work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards. .',
    income:'Estimated income: 6500-700$',
    tagTitle:'UI/UX'
}]

export default function Home(props){
    const navigator = useNavigation()
    return(
        <View style={{flex:1}}>
            <ScrollView contentContainerStyle={styles.container}>
                <KSpacer h={50}/>
                <Text style={styles.header}>Find a job that suits you</Text>
                <KSpacer h={20}/>
                {
                    listOfCards.map(el =>
                        <>
                            <KContainer title={el.title} date={el.date} decription={el.decription} tagTitle={el.tagTitle} income={el.income}/>
                            <KSpacer h={10}/>
                        </>

                    )
                }
                <KSpacer h={20}/>
            </ScrollView>
        </View>


    )
}
const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        alignItems:'center',
    },
    header:{
        fontSize:16,
        fontWeight:'bold',
    },
})


