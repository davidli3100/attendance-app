import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Font, AppLoading} from 'expo';

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
      <View>
        <Text>
          If you are seeing this, something has gone horribly wrong - We're working on solving the error!
        </Text>
      </View>
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


  }
}

const styles = StyleSheet.create({
  container: {
  },
});
