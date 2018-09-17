import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import { styles } from '../../styles/CreateNewUserStyle.js'

export class CreateNewUserComponent extends React.Component {
    static navigationOptions = {
        title: 'CreateNewUser',
        header: null
    }
    onComponentDidMount() {
        console.log("Settings");
        
    }
    createUser() {
        console.log("created");
    }
    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>∞playshare∞</Text>
                <TextInput style={styles.inputField} placeholder={'username'}></TextInput>
                <TextInput style={styles.inputField} placeholder={'email address'}></TextInput>
                <TextInput style={styles.inputField} placeholder={'password'}></TextInput>
                <TouchableOpacity style={styles.button} onPress={this.createUser}>
                    <Text style={styles.text}>create</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}