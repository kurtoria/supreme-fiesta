import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import { styles } from '../../styles/LoginStyle.js'

export class LoginComponent extends React.Component {
    static navigationOptions = {
        title: 'Login',
        header: null
    }
    onComponentDidMount() {
        console.log("log in");
        
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>∞playshare∞</Text>
                <TextInput style={styles.inputField} placeholder={'email address'}></TextInput>
                <TextInput style={styles.inputField} placeholder={'password'}></TextInput>
                
                <TouchableOpacity style={styles.button} onPress={ ()=> {navigate('UserProfile')} }>
                    <Text style={styles.text}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ ()=> {navigate('CreateNewUser')} }>
                    <Text style={styles.text}>new to playshare?</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}