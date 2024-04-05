import React, { useEffect } from "react";
import { View, Text, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { styles } from "./styles";
const Splash = (props:any) => {
    const setTimeCall = () => {
        setTimeout(() => {
            props.navigation.replace('Host');
            // Alert.alert('meow')
       
        }, 2000);
    }

    useEffect(() => {
        setTimeCall();
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animatable.Text animation="bounceIn" duration={2500} iterationCount={1} direction="alternate" style={{ textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '500' }} >The Lobbyist App</Animatable.Text>

        </View>
    )
}
export default Splash;