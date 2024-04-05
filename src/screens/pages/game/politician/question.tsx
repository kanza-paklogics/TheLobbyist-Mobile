import React, { useEffect } from "react";
import { View, Text, Alert, StatusBar } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { styles } from "../styles";
const Question = (props: any) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'blue'} />
            <View style={styles.topbar}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 24, fontWeight: '500' }}>The Lobbyist App</Text>
            </View>
            <View style={{ flex: 0.1, marginTop: '5%', justifyContent: 'center', alignItems: 'center' }} >

                <Text style={{ color: 'black', fontSize: 25 }}>QUESTION:</Text>

            </View>

            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '400', }}>Which country is most populated ?</Text>
            </View>
            <View style={{ flex: 0.45,  justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Answers')} style={{ width: 300, alignItems: 'center', borderRadius: 10, justifyContent: 'center', height: 70, backgroundColor: 'blue', alignSelf: 'center', }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Pick the Answer</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default Question;