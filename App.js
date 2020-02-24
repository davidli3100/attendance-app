import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from 'expo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/Login';
import Home from './screens/Home';
/**
 * Create navigation logic 
 * @todo consider moving this to a separate file later
 */

 const Stack = createStackNavigator();


export default class App extends React.Component {

  constructor(props) {
    super(this.props)
    this.state = {
      isReady: false
    }
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError = {console.warn}
        />
      );  
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          { 
            this.state.userToken === null && this.state.UserLoggedIn === null 
            ? 
            (
              <Stack.Screen
                name="Sign In"
                component={Login}
              />
            ) 
            :
            (  
              //user signed in
              <Stack.Screen name="Home" component={Home}/>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  /**
   * Create various async functions needed to load and pre-cache assets
   */

  async _loadResourcesAsync() {
    await Font.loadAsync({
      'Averta-Regular': require('./assets/fonts/Averta-Regular.ttf'),
      'Averta-Bold': require('./assets/fonts/Averta-Bold.ttf'),
      'Averta-Light': require('./assets/fonts/Averta-Light.otf'),
      'Averta-Black': require('./assets/fonts/Averta-Black.ttf'),
      'Averta-BoldItalic': require('./assets/fonts/Averta-BoldItalic.ttf'),
      'Averta-ExtraBold': require('./assets/fonts/Averta-ExtraBold.ttf')
    })

    // start checking for whether or not a user is logged in

  }
}

const styles = StyleSheet.create({
  container: {
  },
});
