import React, { useEffect, useState } from "react";
import { View, Text, Alert, StatusBar, TextInput } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { styles } from "./styles";
import { Select, Checkbox } from 'native-base'
const JoinOptions = (props: any) => {
    const [players, setPlayers] = useState([
        {
            label: 2,
            value: 2,
        },
        {
            label: 4,
            value: 4,
        },
        {
            label: 6,
            value: 6,
        },
        {
            label: 8,
            value: 8,
        },
    ])
    const [playerValue, setPlayerValue] = useState(0)
    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 24, fontWeight: '500' }}>The Lobbyist App</Text>

            </View>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Enter Room Code</Text>
                <TextInput placeholder="KRQZ" style={{ width: '50%', textAlign: 'center', alignSelf: 'center', backgroundColor: 'white', color: 'black', fontSize: 18, fontWeight: '600' }} />
            </View>
            <View style={{ flex: 0.4,  justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Your Name</Text>
                <TextInput placeholder="JAMIE" style={{ width: '50%', textAlign: 'center', alignSelf: 'center', backgroundColor: 'white', color: 'black', fontSize: 18, fontWeight: '600' }} />
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginVertical: '2%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: heightPercentageToDP('8'), width: widthPercentageToDP('35'), backgroundColor: 'blue', }}>
                    <Text style={{ color: 'white' }}>ENTER ROOM</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default JoinOptions