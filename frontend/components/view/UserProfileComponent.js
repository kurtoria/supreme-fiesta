import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import { styles } from '../../styles/UserProfileStyle.js'

export class UserProfileComponent extends React.Component {
    static navigationOptions = {
        title: 'UserProfile',
        header: null
    }
    onComponentDidMount() {
        console.log("Settings");
        
    }
    logOut() {
        console.log("log out");
        
    }
    changeUsername() {
        console.log("change username");
    }
    changePassword() {
        console.log("change password");
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>∞username∞</Text>
                <TouchableOpacity style={styles.button} onPress={ ()=> {navigate('StartNewGame')} }>
                    <Text style={styles.text}>new game</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ ()=> {navigate('ScoreBoard')} }>
                    <Text style={styles.text}>score board</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ ()=> {navigate('Settings')} }>
                    <Text style={styles.text}>settings</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}