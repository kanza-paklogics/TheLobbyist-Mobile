import React, { useEffect } from "react";
import { View, Text, Alert, StatusBar } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { styles } from "./styles";
const Host = (props: any) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'blue'} />
            <View style={styles.topbar}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 24, fontWeight: '500' }}>The Lobbyist App</Text>
            </View>
            <View style={{ flex: 0.5, marginTop: '5%', justifyContent: 'flex-end', alignItems: 'center' }} >
                <TouchableOpacity onPress={()=>props.navigation.navigate('GameOptions') } style={{ marginVertical: '2%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: heightPercentageToDP('8'), width: widthPercentageToDP('35'), backgroundColor: 'blue', }}>
                    <Text style={{ color: 'white' }}>HOST NEW GAME</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>props.navigation.navigate('JoinOptions')} style={{ marginVertical: '2%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: heightPercentageToDP('8'), width: widthPercentageToDP('35'), backgroundColor: 'blue', }}>
                    <Text style={{ color: 'white' }}>JOIN A GAME</Text>
                </TouchableOpacity>
            </View>
            <View style={{  flex: 0.4, justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginBottom: '10%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: heightPercentageToDP('8'), width: widthPercentageToDP('35'), backgroundColor: 'blue', }}>
                    <Text style={{ color: 'white' }}>HOW TO PLAY</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Host;