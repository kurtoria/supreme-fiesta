import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { LoginComponent } from './components/view/LoginComponent.js'
import { UserProfileComponent } from './components/view/UserProfileComponent.js'
import { CreateNewUserComponent } from './components/view/CreateNewUserComponent.js'
import { StartNewGameComponent } from './components/view/StartNewGameComponent.js'
import { ScoreBoardComponent } from './components/view/ScoreBoardComponent.js'
import { SettingsComponent } from './components/view/SettingsComponent'

const NavigationApp = createStackNavigator({
    Login: { screen: LoginComponent },
    UserProfile: { screen: UserProfileComponent },
    CreateNewUser:  { screen: CreateNewUserComponent },
    StartNewGame: { screen: StartNewGameComponent },
    ScoreBoard: { screen: ScoreBoardComponent },
    Settings: { screen: SettingsComponent },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
  {
    navigationOptions: {
      headerStyle: {
      marginTop: 26
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <NavigationApp />
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
