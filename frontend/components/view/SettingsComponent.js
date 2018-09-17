import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import { styles } from '../../styles/SettingsStyle.js'

export class SettingsComponent extends React.Component {
    static navigationOptions = {
        title: 'Settings',
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
                <Text style={styles.titleText}>∞settings∞</Text>
                <TouchableOpacity style={styles.button} onPress={this.changeUsername}>
                    <Text style={styles.text}>Change username</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.changePassword}>
                    <Text style={styles.text}>Change password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.logOut}>
                    <Text style={styles.text}>Log out</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}