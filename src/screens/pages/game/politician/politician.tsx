import React, { useEffect } from "react";
import { View, Text, Alert, StatusBar } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { styles } from "../styles";
const Politician = (props: any) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'blue'} />
            <View style={styles.topbar}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 24, fontWeight: '500' }}>The Lobbyist App</Text>
            </View>
            <View style={{ flex: 0.3, marginTop: '5%', justifyContent: 'space-around', alignItems: 'center' }} >

                <Text style={{ color: 'black', fontSize: 18 }}>You are the politician</Text>

                <Text style={{ color: 'black', fontSize: 18 }}>Pick a card and scan</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 25 }}>(Camera View)</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Outloud')} style={{width:300, alignItems:'center', borderRadius:10, justifyContent:'center', height:70, backgroundColor:'blue', alignSelf:'center',}}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Send Answers to Players</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default Politician;