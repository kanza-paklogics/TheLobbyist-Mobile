import React, { useEffect } from "react";
import { View, Text, Alert, StatusBar } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { styles } from "../styles";
const Outloud = (props: any) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'blue'} />
            <View style={styles.topbar}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 24, fontWeight: '500' }}>The Lobbyist App</Text>
            </View>
            <View style={{ flex: 0.6, marginTop: '5%', justifyContent: 'space-around', alignItems: 'center' }} >

                <Text style={{ color: 'black', fontSize: 18 }}>Lobbyists are getting their answers</Text>

                <Text style={{ color: 'black', fontSize: 18 }}>Have Lobbyists read their answers outloud</Text>
            </View>
           
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Question')} style={{width:300, alignItems:'center', borderRadius:10, justifyContent:'center', height:70, backgroundColor:'blue', alignSelf:'center',}}>
                    <Text style={{ color: 'white', fontSize: 20 }}>See the Question</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default Outloud;