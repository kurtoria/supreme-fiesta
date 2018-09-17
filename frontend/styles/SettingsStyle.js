import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        position: 'absolute',
        fontSize: 50,
        textAlign: 'center',
        top: '6%',
    },
    /*inputField: {
        position: 'relative',
        borderColor: '#000',
        borderWidth: 1,
        width: 350,
        fontSize: 30,
        top: '-15%',
        marginTop: 10,
    },*/
    text: {
        fontSize: 20
    },
    button: {
        //position: 'absolute',
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        top: '10%',
        marginTop: 10
    }
})