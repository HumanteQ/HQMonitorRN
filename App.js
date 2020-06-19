import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import hqm from 'react-native-hqm';


export default function App() {
  
  // Initialize SDK
  hqm.initSdk(
    {
      sdkKey: 'test_key',
      isDebug: true,
    },
    (result) => {
      // OK
      console.log(result);
    },
    (error) => {
      // Failure
      console.error(error);
    }
  );

  // Start SDK
  hqm.start();
  
  // Send event
  hqm.log('test_event', 'test_value');

  // Send target segments to AppsFlyer/Firebase. 
  hqm.trackSegments(true, hqm.HQMTrackers.AppsFlyer);
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
