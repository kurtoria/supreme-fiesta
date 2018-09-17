import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import { styles } from '../../styles/ScoreBoardStyle.js'

export class ScoreBoardComponent extends React.Component {
    static navigationOptions = {
        title: 'ScoreBoard',
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
                <Text style={styles.titleText}>∞score board∞</Text>
                
                
            </View>
        )
    }
}