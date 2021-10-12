import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native';

const App = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <SafeAreaView style={{ flex: 1,  }}>
      <View style={{ flex: 1, backgroundColor: 'red', marginHorizontal: width / 10 }} />
      <View style={{ flex: 1, backgroundColor: 'yellow' }} />
      <View style={{ flex: 1, backgroundColor: 'blue', }} />
      <View style={{ flex: 1, backgroundColor: 'green', }} />
      <View style={{ flex: 1, backgroundColor: 'black', }} />
    </SafeAreaView>
  );
};

export default App;