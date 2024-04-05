import React, { useEffect, useState } from "react";
import { View, Text, Alert, StatusBar } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { styles } from "./styles";
import { Select, Checkbox } from 'native-base'
const GameOptions = (props: any) => {
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
                <Select selectedValue={playerValue}
                    onValueChange={itemValue => setPlayerValue(itemValue)}
                    w={'90%'} accessibilityLabel={'Select Number of Players'} placeholder={'Select Number of Players'} placeholderTextColor={'black'}>
                    {/* {players.map((data: any, index: any) => {
                        <Select.Item label={data.label} value={data.value} />
                    })} */}
                    <Select.Item label={2} value={2} />
                    <Select.Item label={4} value={4} />
                    <Select.Item label={6} value={6} />
                    <Select.Item label={8} value={8} />
                </Select>
            </View>
            <View style={{ flex: 0.4, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black' }}>Game Options</Text>
                <View style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: 'row', marginVertical: '0.5%' }}>
                        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
                        <Text style={{ color: 'black', marginLeft: 10 }}>Unlimited Time</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: '0.5%', justifyContent: 'center', alignItems: 'center', }}>
                        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
                        <Text style={{ color: 'black', marginLeft: 10 }}>2 Minute Rounds</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Politician')} style={{ marginVertical: '2%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: heightPercentageToDP('8'), width: widthPercentageToDP('35'), backgroundColor: 'blue', }}>
                    <Text style={{ color: 'white' }}>START A GAME</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default GameOptions