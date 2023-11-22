import {View, StyleSheet, Image, Text} from "react-native";

export default function DownloadComponent() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.contCard}>
                    <View style={styles.text}>
                        <Text style={styles.name}>Resume - Mihai Pop</Text>
                        <Text style={styles.subtext}>PDF File</Text>
                        <Text style={styles.kbt}>23.59Kb</Text>
                    </View>
                </View>
                <View style={styles.photo}>
                    <Image source={require('./Group_4.png')}
                           style={styles.image}/>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        alignItems: 'center',
        width: 350,
        height: 104,
        borderRadius: 14,
        backgroundColor: 'white',
        shadowOpacity: 0.3,
        flexDirection:'row',
        gap:5,

    },
    contCard: {
        width: '70%',
        justifyContent: 'center',


    },
    text: {
        alignItems: 'left',
        justifyContent: 'space-evenly',
        padding: 10,
        width: '84%',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16.5,

    },
    subtext: {
        color: '#54B435',
        fontSize: 12,
    },
    kbt: {
        fontSize: 14,
        marginTop: 18,
    },
    photo: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '30%',
        height: '100%',
    },
    image: {
        height: 62,
        width: 60,


    },

})
