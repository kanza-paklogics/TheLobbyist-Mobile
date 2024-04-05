import React, { useEffect } from "react";
import { View, Text, Alert, StatusBar } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { styles } from "../styles";
const Answers = (props: any) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'blue'} />
            <View style={styles.topbar}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 24, fontWeight: '500' }}>The Lobbyist App</Text>
            </View>
            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }} >

                <Text style={{ color: 'black', marginTop: '5%', fontSize: 25 }}>QUESTION:</Text>
                <Text style={{ color: 'black', marginTop: '5%', fontSize: 20 }}>Which country is most populated?</Text>
                <View style={{marginTop:'2.5%',}}>
                    <TouchableOpacity style={{ width: 300, marginVertical: '2.5%', alignItems: 'center', borderRadius: 10, justifyContent: 'center', height: 70, backgroundColor: 'blue', alignSelf: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Sweden</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 300, marginVertical: '2.5%', alignItems: 'center', borderRadius: 10, justifyContent: 'center', height: 70, backgroundColor: 'blue', alignSelf: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Ireland</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 300, marginVertical: '2.5%', alignItems: 'center', borderRadius: 10, justifyContent: 'center', height: 70, backgroundColor: 'blue', alignSelf: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>India</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 300, marginVertical: '2.5%', alignItems: 'center', borderRadius: 10, justifyContent: 'center', height: 70, backgroundColor: 'blue', alignSelf: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Bengal</Text>
                    </TouchableOpacity>
                </View>
            </View>


            

        </View>
    )
}
export default Answers;