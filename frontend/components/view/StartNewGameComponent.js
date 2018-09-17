import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import { styles } from '../../styles/StartNewGameStyle.js'

export class StartNewGameComponent extends React.Component {
    static navigationOptions = {
        title: 'StartNewGame',
        header: null
    }
    onComponentDidMount() {
        console.log("Settings");
        
    }
    presetGroups() {
        console.log("preset");
        
    }
    newGroup() {
        console.log("new group");
    }
    notConnected() {
        console.log("not connected");
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>∞start new game∞</Text>
                <TouchableOpacity style={styles.button} onPress={this.newGroup}>
                    <Text style={styles.text}>new group</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={this.presetGroups}>
                    <Text style={styles.text}>preset groups</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={this.notConnected}>
                    <Text style={styles.text}>not connected</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}